import { Middleware } from "koa";
import { IRouter } from "./IRouter.interface";


export interface IAppInit{
    port:number;
    middlewares:Middleware[];
    routers:IRouter[];
};