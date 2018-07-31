class ReviewsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @skill = Skill.find(params[:skill_id])
    @reviews = @skill.reviews.all
    render json: @reviews 
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
