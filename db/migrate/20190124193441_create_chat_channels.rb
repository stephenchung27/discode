class CreateChatChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :chat_channels do |t|
      t.string :channel_name, null: false
      t.integer :server_id, null: false
      t.string :identifier, null: false

      t.timestamps
    end
    add_index :chat_channels, [:channel_name, :server_id], unique: true
  end
end
