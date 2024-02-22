class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :pages, :image, :genre_id

  has_many :reviews
  has_many :users

end
