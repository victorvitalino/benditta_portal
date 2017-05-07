class CreateAdminUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :admin_users do |t|
     
      t.string   :first_name
      t.string   :last_name
      t.string   :avatar
      t.string   :email
      t.string   :password_digest
      t.integer  :privilege, default: 0
      t.text     :bio
      t.datetime :last_signin_at
      t.string   :remember_token
      t.datetime :remember_token_expires_at
      t.boolean  :status,  default: true 
      
      t.timestamps
    end
  end
end
