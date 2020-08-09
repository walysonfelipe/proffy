import express from 'express';
import cors from "cors";
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// Corpo (Request Body): Dados para criacao ou att de dados
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginacao, filtros, ordenacao
//localhost:3333/users

app.listen(3333);


