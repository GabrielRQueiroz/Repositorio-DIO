import { NextFunction, Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import ForbiddenError from '../models/errors/forbidden.error.models';

async function jwtAuthMiddleware(
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

		if (authType !== 'Bearer' || !authToken) {
			throw new ForbiddenError('Tipo iválido de autenticação');
		}

		try {
			const tokenPayload = JWT.verify(authToken, 'my_secret_key');

			if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
				throw new ForbiddenError('Token inválido');
			}

			const uuid = tokenPayload.sub;
			const user = {
				uuid: tokenPayload.sub,
				username: tokenPayload.username,
			};

			req.user = user;

			next();
		} catch (error) {
			throw new ForbiddenError('Token inválido');
		}
	} catch (error) {
		next(error);
	}
}

export default jwtAuthMiddleware;
