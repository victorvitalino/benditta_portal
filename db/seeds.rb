# Admin User Fields
#t.string   :first_name
#t.string   :last_name
#t.string   :avatar
#t.string   :email
#t.string   :password_digest
#t.integer  :privilege, default: 0
#t.text     :bio
#t.datetime :last_signin_at
#t.string   :remember_token
#t.datetime :remember_token_expires_at
#t.boolean  :status,  default: true 


Admin::User.create({
  first_name: "Usuário",
  last_name: "Teste",
  email: "teste@exameaqui.com",
  password_digest: "123456789",
  status: true,
  privilege: 2 #administrator
})