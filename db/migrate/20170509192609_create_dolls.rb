class CreateDolls < ActiveRecord::Migration[5.0]
  def change
    create_table :dolls do |t|
      t.string :name
      t.integer :category
      t.boolean :status
      t.string :sku
      t.string :photo
      t.string :photoa
      t.string :photob
      t.text :description

      t.timestamps
    end
  end
end
