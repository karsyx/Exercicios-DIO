import express from 'express';
import usersRouter from './routes/users.route'
import statusRoute from './routes/status.route'
import errorHandler from './middlewares/error-handler.middleware';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usersRouter);
app.use(statusRoute);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});