import express, { NextFunction, Request, Response } from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rotas
app.use(usersRoute);
app.use(statusRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({ foo: 'lesgou' });
});

// inicialização
app.listen(3000, () => {
	console.log('Aplicação executando na porta 3000...');
});