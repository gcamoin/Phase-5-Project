class ReviewsController < ApplicationController
    skip_before_action :authorize, only: :show
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review
        
    end

    def create 
        review = @current_user.reviews.create(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        review = @current_user.reviews.find_by(id: params[:id])
        if review
            review.destroy
            head :no_content
        else
            render json: { error: "not authorized" }, status: :not_found
        end
    end

    private

    def review_params
        params.permit(:content, :book_id)
    end
end
