"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
class App {
    constructor(appInit) {
        this.app = new koa_1.default();
        this.port = appInit.port;
        this.initAssets();
        this.initMiddlewares(appInit.middlewares);
        this.initRoutes(appInit.routers);
    }
    ;
    initMiddlewares(middlewares) {
        middlewares.forEach((middleware) => {
            this.app.use(middleware);
        });
    }
    ;
    initRoutes(routes) {
        routes.forEach((route) => {
            this.app.use(route.router.routes());
        });
    }
    ;
    initAssets() {
        this.app.use((0, koa_bodyparser_1.default)());
    }
    ;
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.listen(this.port, () => {
                console.log(`The app is running on http://localhost:${this.port}`);
            });
        });
    }
    ;
}
;
exports.default = App;
