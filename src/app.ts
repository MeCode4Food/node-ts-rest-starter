import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import mysql from 'mysql'
import connection from 'express-myconnection'
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

    app.use(connection(mysql, config.database, 'single'));

    app.all("*", function(req, res, next){
        console.log("hi");
        next();
    })
  }

  private mountRoutes (): void {
    this.app.use('/', routes)
  }
}

export default new App().app