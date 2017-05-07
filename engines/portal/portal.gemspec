$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "portal/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "portal"
  s.version     = Portal::VERSION
  s.authors     = ["Elton Silva"]
  s.email       = ["elton.chrls@gmail.com"]
  s.homepage    = "https://github.com/renergarcia/exame_aqui.git"
  s.summary     = "Módulo portal"
  s.description = "Módulo de visão do portal"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency "rails", "~> 5.0.2"

  s.add_development_dependency "sqlite3"
end
