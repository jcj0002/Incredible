class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :name
      t.string :title
      t.date :date
      t.string :description
      t.string :skill_rating
      t.references :skill, foreign_key: true

      t.timestamps
    end
  end
end
