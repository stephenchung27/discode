class AddServersArrayToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :server_index, :integer, array: true, default: [], null: false
  end
end
