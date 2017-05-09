class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.boolean :publish
      t.string :thumb
      t.string :thumbnail
      t.string :photo
      t.boolean :featured
      t.timestamps null: false
      t.timestamps
    end
  end
end
