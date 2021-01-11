import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(process.env.API_PORT, () => {
  // eslint-disable-next-line no-console
  console.log('☁  ✈ Server up and running ✈  ☁');
});

// TOFIX: The deatached mode from the database isn`t working
