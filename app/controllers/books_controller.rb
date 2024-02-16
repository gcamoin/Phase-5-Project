class BooksController < ApplicationController
    def index
        books = Book.all
        render json: books, include: ['reviews', 'reviews.user']
    end
    
    def show
        book = Book.find_by(id: params[:id])
        if book
            render json: book, include: ['reviews', 'reviews.user']
        else
            render json: { error: "book not found" }, status: :not_found
        end
    end

end
