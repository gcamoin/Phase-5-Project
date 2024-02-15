class RemoveLikesFromBooks < ActiveRecord::Migration[6.1]
  def change
    remove_column :books, :likes, :integer
  end
end
