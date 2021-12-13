import { NextFunction, Request, Response } from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import jwtAuthMiddleware from './middlewares/jwt-authentication.middleware';
import authRoute from './routes/auth.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

let express = require('express');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rotas
app.use(statusRoute);
app.use(authRoute);

app.use(jwtAuthMiddleware);
app.use(usersRoute);

// handlers
app.use(errorHandler);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({ foo: 'lesgou' });
});

// inicialização
app.listen(3000, () => {
	console.log('Aplicação executando na porta 3000...');
});
