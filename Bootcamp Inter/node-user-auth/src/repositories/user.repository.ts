import db from '../db';
import User from '../models/user.model';

class UserRepository {
	async findAllUsers(): Promise<User[]> {
		const query = `
         SELECT uuid, username
         FROM application_user
      `;

		const result = await db.query<User>(query);
		const rows = result.rows;

		return rows || [];
	}

	async findById(uuid: string): Promise<User> {
		const query = `
         SELECT uuid, username
         FROM application_user
         WHERE uuid = $1
      `;
		// if WHERE uuid ${uuid}, there would be an exposure possibility by SQL injection, once the uuid would be into the actual code

		const values = [uuid];

		const { rows } = await db.query<User>(query, values);
		const [user] = rows;

		return user;
	}

	async createUser(user: User): Promise<string> {
		const script = `
         INSERT INTO application_user (
            username, password
         )
         VALUES ($1, crypt($2, 'iAmStaff'))
         RETURNING uuid
      `;

		const values = [user.username, user.password];

		const { rows } = await db.query<{ uuid: string }>(script, values);
		const [newUser] = rows;

		return newUser.uuid;
	}

	async updateUser(user: User): Promise<void> {
		const script = `
         UPDATE application_user 
         SET
            username = $1, 
            password = crypt($2, 'iAmNewPw')
         WHERE uuid = $3
      `;
		// Promise<void> means that no return is actually needed, nothing is being added nor shown

		const values = [user.username, user.password, user.uuid];

		await db.query<{ uuid: string }>(script, values);
	}

	async removeUser(uuid: string): Promise<void> {
		const script = `
         DELETE FROM application_user
         WHERE uuid = $1
      `;

		const values = [uuid];
		await db.query(script, values);
	}
}

export default new UserRepository();
