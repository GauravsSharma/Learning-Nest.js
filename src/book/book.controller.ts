import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book, BookForBody } from "./data/book.dto";
import { v1 as uuidv1 } from 'uuid';

@Controller("books")
export class BookController{
    constructor(private bookService:BookService){}
     
    @Post()
    addBook(@Body() book:BookForBody):Book{
       const uuid:string = uuidv1();
       return this.bookService.addBook(book,uuid);
    }

    @Get()
    getAllBooks():Book[]{
        return this.bookService.getBooks();
    }

    @Put(":id")
    updateBook(@Body() book:BookForBody,@Param("id") id:string):Book{
        return this.bookService.updateBook(book,id);
    }

    @Delete(":id")
    deleteBook(@Param("id") id:string):string{
        return this.bookService.deleteBook(id);
    }
}