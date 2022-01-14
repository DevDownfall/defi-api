import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';

const app = express();

app.use(compression());
app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(
    cors({
        origin: ['https://localhost:3000', 'https://downfall.dev'],
        methods: ['GET', 'POST', 'OPTIONS'],
        credentials: true,
        preflightContinue: true,
    })
);

app.get('/', (req, res) => {
    res.send({ msg: 'Pong!' });
});

app.use('/v1', require('./v1/router'));

app.listen(3001, () => {
    console.log(`API Running on 3001`);
});
