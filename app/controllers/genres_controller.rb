class GenresController < ApplicationController
    def index
        genres = Genre.all.order(:name)
        render json: genres
    end

    def show
        genre = Genre.find(params[:id])
        render json: genre
      end

      def create 
        genre = Genre.create(name: params[:name], image: params[:image])
        if genre.valid?
            render json: genre, status: :created
        else
            render json: {errors: genre.errors.full_messages}, status: :unprocessable_entity
        end
    end

end
