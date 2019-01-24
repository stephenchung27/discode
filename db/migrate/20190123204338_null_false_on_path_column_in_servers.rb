class NullFalseOnPathColumnInServers < ActiveRecord::Migration[5.2]
  def change
    change_column :servers, :path, :string, null: false
  end
end
