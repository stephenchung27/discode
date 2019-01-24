class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.integer :admin_id, null: false
      t.string :server_name, null: false
      t.string :image_url

      t.timestamps
    end
  end
end
