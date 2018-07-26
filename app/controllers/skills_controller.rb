class SkillsController < ApplicationController
    before_action :authenticate_user!
  
    def index
      @skills = current_user.skills
  
      render json: @skills
    end
  
    def show
      @skill = Skill.find(params[:id])
  
      render json: @skill
    end
  
    def create
      @user = current_user
      @skill = @user.skills.build(skill_params)
  
      if @user.save
        render json: @skill, status: :created, location: @skill
      else
        render json: @skill.errors, status: :unprocessable_entity
      end
    end
  
    def update
      @skill = Skill.find(params[:id])
  
  
      if @skill.update(skill_params)
        render json: @skill
      else
        render json: @skill.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @skill = Skill.find(params[:id]).delete
  
      render status: :ok
    end
  
    private
  
    def skill_params
      params.require(:skill).permit(:title, :description, :rating)
    end
  end