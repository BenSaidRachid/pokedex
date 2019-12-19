import express from 'express'
import routes from './routes'
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
const app = express();
const port = 8080;

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));