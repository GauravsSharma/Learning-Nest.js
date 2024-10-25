import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class BookMiddleWare implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        console.log("Book middleware called");
        next();
    }
}