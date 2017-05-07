Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.paths << Rails.root.join("libraries")

Rails.application.config.assets.precompile += %w( portal.css portal.js )