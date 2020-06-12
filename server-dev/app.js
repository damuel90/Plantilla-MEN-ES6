// packeges
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

const app = express();

const router = express.Router();
router.get('/', function(req, res) {
    res.end("Hola Mundo");
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use('/', router);


export default app;