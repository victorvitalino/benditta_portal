Admin::Engine.routes.draw do
  root 'dashboard#index'

  resources :sessions do
    delete 'logout', to: 'sessions#destroy', on: :collection, as: :logout
  end

  resources :users,      path: 'usuarios'
  resources :posts,      path: 'postagens'
  resources :dolls,      path: 'bonecas'
  # resources :clinics,    path: 'clinicas' do
  #   resources :clinic_users, path: 'usuarios'
  # end
  #
  # resources :exams,      path: 'exames'
  # resources :exam_types, path: 'tipos-exame'

end
