source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.0.2'

gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'

gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'
gem 'turbolinks', '~> 5'

gem 'jbuilder', '~> 2.5'

gem 'has_scope'
gem 'haml'
gem 'simple_form'
gem "mini_magick"
gem 'carrierwave'
gem 'fog-aws'
gem 'validates_cpf_cnpj'
gem 'validates_timeliness'
gem 'email_validator'
gem 'file_validators'


group :development, :test do
  gem 'byebug', platform: :mri
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :production do
  gem 'rails_12factor'
end

path 'engines' do
  gem 'admin'
  gem 'portal'
end
