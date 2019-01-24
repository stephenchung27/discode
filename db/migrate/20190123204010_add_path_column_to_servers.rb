class AddPathColumnToServers < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :path, :string
    add_index :servers, :server_name
  end
end
