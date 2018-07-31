class ReviewsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @reviews = skills.reviews
    render json:@reviews
  end

  def show
  end

  def create
  end

  def update
  end

  def delete
  end
end
