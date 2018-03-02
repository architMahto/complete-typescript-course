import * as express from 'express';

import { configRoutes } from './configRoutes';

const app = express();

configRoutes(app);

app.listen(8090, () => {
  console.log('Server is running ...');
});