require_dependency 'application_controller'

module Admin
  class ApplicationController < ::ApplicationController
    layout 'application'

    helper_method :current_user
    helper_method :authenticate_user!

    private

    def current_user
      Admin::User.find(session[:admin_id]) rescue nil
    end

    def authenticate_user!
      redirect_to admin.new_session_path if current_user.nil?
    end

  end
end
