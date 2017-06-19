require_dependency 'admin/application_controller'

module Admin
  class DollsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_doll, only: [:edit, :update, :destroy]

    def index
      @dolls = Doll.all
    end

    def new
      @doll = ::Doll.new
    end

   def show
     @doll = ::Doll.find(params[:id])
   end

  def create
      @doll = ::Doll.new(set_params)

      if @doll.save
        flash[:success] = t :success
        redirect_to action: :index
      else
        render action: :new
      end
    end

    def edit
    end

    def update
      if @doll.update(set_params)
        flash[:success] = t :success
        redirect_to action: :index
      else
        render action: :edit
      end
    end

    def destroy
      if @doll.destroy
        flash[:success] = t :success
      else
        flash[:danger] = t :danger
      end

      redirect_to action: :index
    end

    private

    def set_params
      params.require(:doll).permit(:photo,:name, :description, :status, :sku, :category,:photo_2, :photo_3)
    end

    def set_doll
      @doll = ::Doll.find(params[:id])
    end
  end
end
