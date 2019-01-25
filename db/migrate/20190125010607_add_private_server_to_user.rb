class AddPrivateServerToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :direct_messages_server, :integer, null: false
    add_index :users, :direct_messages_server, unique: true
  end
end