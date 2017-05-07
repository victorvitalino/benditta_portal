require_dependency 'admin/application_controller'

module Admin
  class SessionsController < ApplicationController
    
    layout 'application_session'
    
    def new
      @session = Admin::Session.new
    end

    def create
      @session = Admin::Session.new(set_params)

      if @session.valid?
        session[:admin_id] = @session.id
        redirect_to admin.root_path
      else
        render action: :new
      end
    end

    def destroy
      session[:admin_id] = nil
      redirect_to action: :new
    end

    private

    def set_params
      params.require(:session).permit(:email, :password)
    end
    
  end
end