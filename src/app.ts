import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes'
const config = require('../config/config.json');

class App {
  public app : express.Application;

  constructor () {
    this.app = express();
    this.mountMiddleware();
    this.mountRoutes();
  }

  private mountMiddleware(): void {
    let app = this.app;

    app.use(morgan('dev'));

    app.use(cors({
        exposedHeaders: config.corsHeaders
    }));

    app.use(bodyParser.json({
        limit: config.corsHeaders
    }));

  }

  private mountRoutes (): void {
    const router = express.Router();

    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })

    this.app.use('/', router);
    this.app.use('/', routes);
  }
}

export default new App().app