import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3333);