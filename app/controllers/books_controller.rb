class BooksController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:show, :create]
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

    def create 
        book = Book.create(book_params)
        if book.valid?
            render json: book, status: :created
        else
            render json: {errors: book.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def book_params
       params.permit(:title, :author, :image, :pages, :genre_id) 
    end


end
