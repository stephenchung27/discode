class AddPathColumnToChatChannels < ActiveRecord::Migration[5.2]
  def change
    add_column :chat_channels, :path, :string, null: false
  end
end
