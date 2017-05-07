require_dependency 'admin/application_controller'

module Admin
  class UsersController < ApplicationController
    
    before_action :authenticate_user!
    before_action :set_user, only: [:edit, :update, :destroy, :show]

    def index
      @users = Admin::User.all
    end

    def show
    end

    def new
      @user  = Admin::User.new
    end

    def create
      @user  = Admin::User.new(set_params)

      if @user.save
        flash[:success] = t :success
        redirect_to action: :index
      else
        render action: :new
      end
    end

    def edit
    end

    def update

      if @user.update(set_params)
        flash[:success] = t :success
        redirect_to action: :index
      else
        render action: :new
      end

    end
  
    def destroy

      if @user.destroy
        flash[:success] = t :success
      else
        flash[:danger]  = t :danger
      end
      
      redirect_to action: :index
    end    
    
    private

    def set_params
      params.require(:user)
            .permit(:first_name, :last_name, :email, :password_digest, :password_confirmation, 
                    :privilege, :status, :bio)

    end

    def set_user
      @user = Admin::User.find(params[:id])
    end
    
  end
end