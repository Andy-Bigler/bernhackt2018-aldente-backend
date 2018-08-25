import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET,PUT');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

class App {
  public app: express.Application;
  public route: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.route.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(allowCrossDomain);
  }
}

export default new App().app;
