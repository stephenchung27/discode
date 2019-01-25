class CreateChangeNullToTrueInDirectServers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :direct_messages_server, :integer, :null => true
  end
end
