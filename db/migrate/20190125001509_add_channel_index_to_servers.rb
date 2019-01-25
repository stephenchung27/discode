class AddChannelIndexToServers < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :chat_channel_index, :integer, array: true, default: []
  end
end