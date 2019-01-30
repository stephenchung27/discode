class DeletePrivateServerId < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :private_server_id
    remove_column :users, :private_server_id
  end
end
