class AdminUser < ApplicationRecord
  enum privilege: ['normal', 'gerente', 'administrador']


end
