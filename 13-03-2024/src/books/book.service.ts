import bookModel from './book.schema'

export class BookService {

    async create(book: any) {
        const createdBook = bookModel.create(book)
        return createdBook
    }

    async get(id : any){
        const getBook = bookModel.findById(id)
        return getBook
    }

    async put(book : any){
        const updatedBook = bookModel.updateOne(book)
        return book
    }

    async delete(id : any){
        const deletedBook = bookModel.deleteOne(id)
        return deletedBook
    }
}
