class GenresController < ApplicationController
    def index
        genres = Genre.all.order(:name)
        render json: genres, include: ['books']
    end
end
