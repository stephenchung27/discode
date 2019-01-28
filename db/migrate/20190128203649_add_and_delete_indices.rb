class AddAndDeleteIndices < ActiveRecord::Migration[5.2]
  def change
    remove_index :servers, :server_name
    add_index :servers, :path
    add_index :chat_channels, :path
  end
end
