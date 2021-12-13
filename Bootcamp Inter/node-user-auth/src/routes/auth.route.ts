import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import JWT from 'jsonwebtoken';
import basicAuthMiddleware from '../middlewares/basic-authentication.middleware';
import jwtAuthMiddleware from '../middlewares/jwt-authentication.middleware';
import ForbiddenError from '../models/errors/forbidden.error.models';

const authRoute = Router();

authRoute.post(
	'/token/validate',
	jwtAuthMiddleware,
	(req: Request, res: Response, next: NextFunction) => {
		res.sendStatus(StatusCodes.OK);
	}
);

authRoute.post(
	'/token',
	basicAuthMiddleware,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const user = req.user;

			if (!user) {
				throw new ForbiddenError('Usuário não informado');
			}

			const jwtPayload = { username: user.username };
			const secretKey = 'my_secret_key';
			const jwtOptions = { subject: user?.uuid };

			const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

			res.status(StatusCodes.OK).json({ token: jwt });
		} catch (error) {
			next(error);
		}
	}
);

export default authRoute;
