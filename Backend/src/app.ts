import dotenv from "dotenv";
import expressFileUpload from "express-fileupload";
dotenv.config(); // Read .env file into process.env
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import config from "./01-utils/config";
import errorsHandler from "./02-middleware/errors-handler";
import ErrorModel from "./03-models/error-model";
import dal from "./04-dal/dal";
dal.connect();
import priceListController from "./06-controllers/priceListModel-controllers";



const server = express();
server.use(expressFileUpload());
server.use(cors());

if (config.isDevelopment) server.use(cors());
server.use(express.json());
server.use("/api", priceListController);



server.use("*", (request: Request, response: Response, next: NextFunction) => {
  next(new ErrorModel(404, "Route not found."));
});

server.use(errorsHandler);

server.listen(process.env.PORT, () => console.log("Listening..."));
