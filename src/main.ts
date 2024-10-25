import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';

const globalMiddleware = (req:Request,res:Response,next:NextFunction)=>{
     console.log("Global middleware called!");
     next();
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleware)
  await app.listen(process.env.PORT ?? 3000,()=>{
    console.log(`Server live at 👁  http://localhost:${process.env.PORT ?? 3000} 👁`);
  });
}
bootstrap();
