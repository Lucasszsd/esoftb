import { Request, Response } from 'express'
import { BookService } from './book.service'

class BookController {
    private bookService: BookService;

    constructor() {
        this.bookService = new BookService();
    }

    async create(req: Request, res: Response) {
        const book = await this.bookService.create(req.body);
        return res.json(book);
    }

    async get(req: Request, res: Response){
        const getBook =  await this.bookService.get(req.params);
        return res.json(getBook);
    }

    async putBook(req: Request, res: Response){
        const putBook =  await this.bookService.put(req.body);
        return res.json(putBook);
    }

    async deleteBook(req: Request, res: Response){
        const deleteBook = await this.bookService.delete(req.params);
        return res.json(deleteBook);
    }
}

export default new BookController();
