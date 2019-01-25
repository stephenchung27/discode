class ChangeNullOfUsersServerIndex < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :server_index, true
  end
end
