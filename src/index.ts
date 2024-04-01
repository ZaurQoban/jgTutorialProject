import App from "./app";



const app = new App({
    port:8000,
    middlewares:[],
    routers:[]
});

app.listen();