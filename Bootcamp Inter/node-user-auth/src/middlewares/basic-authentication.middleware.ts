import { NextFunction, Request, Response } from 'express';
import ForbiddenError from '../models/errors/forbidden.error.models';
import userRepository from '../repositories/user.repository';

async function basicAuthMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const authHeader = req.headers['authorization'];

		if (!authHeader) {
			throw new ForbiddenError('Credenciais não informadas');
		}

		const [authType, authToken] = authHeader.split(' ');

		if (authType !== 'Basic' || !authToken) {
			throw new ForbiddenError('Tipo iválido de autenticação');
		}

		const tokenContent = Buffer.from(authToken, 'base64').toString('utf-8');

		const [username, password] = tokenContent.split(':');

		if (!username || !password) {
			throw new ForbiddenError('Credenciais não preenchidas');
		}

		const user = await userRepository.findUserByUsernameAndPassword(
			username,
			password
		);

		if (!user) {
			throw new ForbiddenError('Usuário ou senha inválidos');
		}

		req.user = user;

		next();
	} catch (error) {
		next(error);
	}
}

export default basicAuthMiddleware;
