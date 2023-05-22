import express from 'express';
import * as Middleware from '@/config/middleware/middleware';
import config from '@/config/env/index';

/**
 * @constant {express.Application}
 */
const app: express.Application = express();

/**
 * @constructs express.Application Middleware
 */
Middleware.configure(app);

/**
 * @constructs express.Application Error Handler
 */
Middleware.initErrorHandler(app);

/**
 * sets port 3000 to default or unless otherwise specified in the environment
 */
app.set('port', config.port || 3000);

/**
 * sets secret to 'superSecret', otherwise specified in the environment
 */
app.set('secret', config.secret || 'superSecret');

/**
 * @exports {express.Application}
 */
export default app;
