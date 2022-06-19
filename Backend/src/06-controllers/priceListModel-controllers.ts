import { PriceListModel } from "../03-models/priceListModel-model";
import express, { NextFunction, Request, Response } from "express";
import logic from "../05-logic/priceListModel-logic";

const router = express.Router();

interface MulterRequest extends Request {
  file: any;
}

router.get(
  "/pricelist",
  async (request: Request, response: Response, next: NextFunction) => {
    try {

      const targets = await logic.getAllPriceList();

      response.json(targets);
    } catch (err: any) {
      next(err);
    }
  }
);



router.post("/pricelist", async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log("(request.body in the controller: " , request.body) ;
        
        const thePriceList = new PriceListModel(request.body);
        console.log("(thePriceList in the controller: " , thePriceList) ;

        const addedPriceList = await logic.addPriceList(thePriceList);
        response.status(201).json(addedPriceList);
    }
    catch (err: any) {
        next(err);
    }
});

//router.get(
 // "/furniture-by-size/:sizeId",
 // async (request: Request, response: Response, next: NextFunction) => {
  //  try {
   //   const sizeId = request.params.sizeId;
   //   const furniture = await logic.getFurnitureBySize(sizeId);
    //  response.json(furniture);
   // } catch (err: any) {
   //   next(err);
  //  }
  //}
//);

router.delete(
  "/pricelist/:_id",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const _id = request.params._id;
      await logic.deletePriceList(_id);
      response.sendStatus(204);
    } catch (err: any) {
      next(err);
    }
  }
);

//import path from "path";
//router.get("/furniture/images/:imageName", async (request: Request, response: Response, next: NextFunction) => {
 //   try {
   //     const imageName = request.params.imageName;
     //   const absolutePath = path.join(__dirname, "..", "assets", "images", imageName);
    //    response.sendFile(absolutePath);
   // }
   // catch (err: any) {
   //     next(err);
  //  }
//});

export default router;
