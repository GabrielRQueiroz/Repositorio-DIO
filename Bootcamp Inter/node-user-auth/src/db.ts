import { Pool } from 'pg';

require('dotenv').config();

let pgKey = process.env.POSTGRESQL_CREDENTIALS;

const connectionString = `postgres://fyuqtlei:ZdfqDzpou8F4QpIz0OHfRnuS8MH-H2sM@kesavan.db.elephantsql.com/fyuqtlei`;
const db = new Pool({ connectionString });

export default db;
