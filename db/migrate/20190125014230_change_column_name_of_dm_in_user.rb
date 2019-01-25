class ChangeColumnNameOfDmInUser < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :direct_messages_server, :private_server_id
  end
end
