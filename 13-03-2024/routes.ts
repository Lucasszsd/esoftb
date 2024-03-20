import { Router } from 'express'
import bookController from './src/books/book.controller'

const routes = Router()
try {
    routes.get("/bookbyid/:id",bookController.get)    
} catch (error) {
    console.error(error)
}


try {
    routes.post('/books', bookController.create)    
} catch (error) {
    console.error(error)
}

try {
    routes.post('/books/:id', bookController.deleteBook)    
} catch (error) {
    console.error(error)
}

try {
    routes.delete('/books/:id', bookController.putBook)    
} catch (error) {
    console.error(error)
}


export {
    routes
}