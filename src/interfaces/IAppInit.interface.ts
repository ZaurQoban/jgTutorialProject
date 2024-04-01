import { IRouter } from "./IRouter.interface";


export interface IAppInit{
    port:number;
    routers:IRouter[];
};