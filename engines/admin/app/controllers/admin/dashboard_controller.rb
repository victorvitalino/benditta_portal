require_dependency 'admin/application_controller'

module Admin
  class DashboardController < ApplicationController
    
    before_action :authenticate_user!

    def index
    end

  end
end
