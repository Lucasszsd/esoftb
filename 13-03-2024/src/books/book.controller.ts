import { Request, Response } from 'express'
import { BookService } from './book.service'

class BookController {
    async create(req: Request, res: Response) {
        const book = await new BookService().create(req.body)
        return res.json(book)
    }

    async get(req: Request, res: Response){
        const getBook =  await new BookService().get(req.params)
        return getBook;

    }

    async putBook(req: Request, res: Response){
        const putBook =  await new BookService().put(req.body)
        return res.json(putBook);
    }
    async deleteBook(req: Request, res: Response){
        const deleteBook = await new BookService().delete(req.params)
        return res.json(deleteBook)
    }
}

export default new BookController()