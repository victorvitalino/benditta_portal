require_dependency 'admin_user'

module Admin
  class User < ::AdminUser

    attr_accessor :password_confirmation
  
    validates :email, email: true, uniqueness: true, presence: true 
        
    def name 
      "#{first_name} #{last_name}"
    end
  end
end
