// const express = require('express')
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./router/globalRouter"
import userRouter from "./router/userRouter"
import videoRouter from "./router/videoRouter"
import routes from "./routes";
const app = express();

const handleHome = (req, res) => res.send('hello from home!!');

const handleProfile = (req, res) => res.send('You are on my profile');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));
 
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;