import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Book, BookForBody } from './data/book.dto';

@Injectable()
export class BookService {
  private books: Book[] = [];

  //addbook
  addBook(book: BookForBody, id: string): Book {
    this.books.push({ ...book, id });
    return this.books[this.books.length - 1];
  }

  //getbooks
  getBooks(): Book[] {
    return this.books;
  }

  //updatebook
  updateBook(book: BookForBody, id: string): Book {

    let index = this.books.findIndex((book) => book.id === id);
    if (index===-1) {
      throw new HttpException('Error while updating', HttpStatus.BAD_GATEWAY);
    }
    console.log(index);
    
    this.books[index] = { ...book, id };
    return this.books[index];
  }

  //deletebook
  deleteBook(id: string): string {
    let index = this.books.findIndex((book) => book.id === id);
    if (!index) {
      throw new HttpException('Error while deleting', HttpStatus.BAD_GATEWAY);
    }
    this.books.splice(index, 1);
    return 'Your item has been deleted successfully';
  }
}
