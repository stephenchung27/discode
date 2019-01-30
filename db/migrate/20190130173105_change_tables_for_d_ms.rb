class ChangeTablesForDMs < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_subscriptions do |t|
      t.integer :chat_channel_id, null: false
      t.integer :user_id, null: false
      t.boolean :is_direct_message, null: false, default: false
      
      t.timestamps
    end

    create_table :server_channels do |t|
      t.integer :server_id, null: false
      t.integer :chat_channel_id, null: false
      t.integer :ord, null: false

      t.timestamps
    end

    remove_column :chat_channels, :server_id  
  end
end
