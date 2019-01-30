class DeleteOrdFromServerChannel < ActiveRecord::Migration[5.2]
  def change
    remove_column :server_channels, :ord
  end
end
