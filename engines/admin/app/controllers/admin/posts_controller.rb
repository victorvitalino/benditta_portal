require_dependency 'admin/application_controller'

module Admin
  class PostsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_post, only: [:edit, :update, :destroy]

    def index
      @posts = Post.all
    end

    def new
      @post = ::Post.new
    end

    def create
      @post = ::Post.new(set_params)

      if @post.save
        flash[:success] = t :success
        redirect_to action: :index
      else
        render action: :new
      end
    end

    def edit
    end

    def update
      if @post.update(set_params)
        flash[:success] = t :success
        redirect_to action: :index
      else
        render action: :edit
      end
    end

    def destroy
      if @post.destroy
        flash[:success] = t :success
      else
        flash[:danger] = t :danger
      end

      redirect_to action: :index
    end

    private

    def set_params
      params.require(:post).permit(:photo,:title, :content, :publish, :photo, :featured)
    end

    def set_post
      @post = ::Post.find(params[:id])
    end
  end
end
