import express from 'express';

/**
 * @constant {express.Application}
 */
const app: express.Application = express();

app.set('port', 3000);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})

/**
 * @exports {express.Application}
 */
export default app;