class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :username
      t.text :image_data

      t.timestamps
    end
  end
end
