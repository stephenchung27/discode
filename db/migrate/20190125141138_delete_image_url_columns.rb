class DeleteImageUrlColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :image_url
    remove_column :servers, :image_url
  end
end
