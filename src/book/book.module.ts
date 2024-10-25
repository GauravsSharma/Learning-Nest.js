import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookMiddleWare } from './book.middleware';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleWare).forRoutes(
      { path: 'books', method: RequestMethod.POST },
      { path: 'books/:id', method: RequestMethod.PUT },
      { path: 'books/:id', method: RequestMethod.DELETE },
    );
  }
}