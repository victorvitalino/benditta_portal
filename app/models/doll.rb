class Doll < ApplicationRecord
    enum category: ['Velhas','Mães','Bailarinas','Pretos Velhos','Órixas','Fridas','Especialistas','Fadas','Iconografia de Brasília','Santtas do Sagrado Cotidiano','V.I.Z.I.N.H.O.S','Outras']
    mount_uploader :photo, PhotoUploader
    mount_uploader :photo_2, PhotoUploader
    mount_uploader :photo_3, PhotoUploader
end
