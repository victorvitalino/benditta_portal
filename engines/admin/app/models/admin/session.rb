require_dependency 'admin/user'

module Admin
  class Session
    include ActiveModel::Model 

    attr_accessor(
      :email,
      :password,
      :id
    )

    validates :email, email: true, presence: true
    validates :password, presence: true, length: {minimum: 6, maximum: 18 }
    validate  :authenticate?

    private

    def authenticate?
      @user = Admin::User.where(email: self.email, password_digest: self.password).first
      
      if @user.present?
        self.id = @user.id
      else
        errors.add(:email, "E-mail ou Senha esta incorreto.")
      end
      
    end

  end
end