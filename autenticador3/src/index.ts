import express from 'express';
import usersRouter from './routes/users.route'
import statusRoute from './routes/status.route'
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(statusRoute);
app.use(usersRouter);
app.use(authorizationRoute);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});