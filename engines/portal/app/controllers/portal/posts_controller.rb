require_dependency 'portal/application_controller'

module Portal
  class PostsController < ApplicationController

    def show
      @posts = Post.find(params[:id])
    end

  end
end
