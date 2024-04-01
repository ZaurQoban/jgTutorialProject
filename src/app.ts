import Application, { Middleware } from 'koa';
import Koa from 'koa';
import { IAppInit } from './interfaces/IAppInit.interface';
import { IRouter } from './interfaces/IRouter.interface';
import bodyParser from 'koa-bodyparser';


class App {
    public app:Application;
    public port:number;

    constructor(appInit:IAppInit){
        this.app = new Koa();
        this.port = appInit.port;
        this.initAssets();
        this.initMiddlewares(appInit.middlewares);
        this.initRoutes(appInit.routers);
    };

    private initMiddlewares(middlewares:Middleware[]){
        middlewares.forEach((middleware)=>{
            this.app.use(middleware);
        });
    };

    private initRoutes(routes:IRouter[]){
        routes.forEach((route)=>{
            this.app.use(route.router.routes());
        });
    };

    private initAssets(){
        this.app.use(bodyParser());
    };

    public async listen(){
        this.app.listen(this.port,()=>{
            console.log(`The app is running on http://localhost:${this.port}`);
        });
    };
};

export default App;