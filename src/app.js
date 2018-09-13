"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var mysql_1 = __importDefault(require("mysql"));
var express_myconnection_1 = __importDefault(require("express-myconnection"));
var routes_1 = __importDefault(require("./routes"));
var config = require('../config/config.json');
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.mountMiddleware();
        this.mountRoutes();
    }
    App.prototype.mountMiddleware = function () {
        var app = this.app;
        app.use(morgan_1.default('dev'));
        app.use(cors_1.default({
            exposedHeaders: config.corsHeaders
        }));
        app.use(body_parser_1.default.json({
            limit: config.corsHeaders
        }));
        app.use(express_myconnection_1.default(mysql_1.default, config.database, 'single'));
    };
    App.prototype.mountRoutes = function () {
        var router = express_1.default.Router();
        router.get('/', function (req, res) {
            res.json({
                message: 'Hello World!'
            });
        });
        this.app.use('/', router);
        this.app.use('/', routes_1.default);
    };
    return App;
}());
exports.default = new App().app;
