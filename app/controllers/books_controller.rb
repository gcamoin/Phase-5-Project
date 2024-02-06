class BooksController < ApplicationController

    def index
        books = Book.all
        render json: restaurants, include: ['reviews', 'reviews.user']
    end
end
