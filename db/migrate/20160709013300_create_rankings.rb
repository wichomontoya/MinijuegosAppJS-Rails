class CreateRankings < ActiveRecord::Migration[5.0]
  def change
    create_table :rankings do |t|
      t.references :user, foreign_key: true
      t.references :game, foreign_key: true
      t.integer :score

      t.timestamps
    end
  end
end
