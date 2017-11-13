require_dependency 'portal/application_controller'

module Portal
  class HomeController < ApplicationController

    def index
      @bendittas = Doll.all
      @posts = Post.limit(6)
    end

  end
end
