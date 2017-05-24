class Admin::PhotoUploader < CarrierWave::Uploader::Base

  include CarrierWave::MiniMagick

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end



    version :thumb do process :resize_to_fit => [32, 32] end
    version :preview do process :resize_to_fit => [128, 128] end
    version :full  do  process :resize_to_fit => [1024, 768] end



  def extension_white_list
	  %w(jpg jpeg gif png)
	end

	def filename
	  if original_filename
	    @name ||= Digest::MD5.hexdigest(File.dirname(current_path))
	    "#{@name}.#{file.extension}"
	  end
	end
end
