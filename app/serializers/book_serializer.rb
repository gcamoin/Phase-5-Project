class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :pages, :image

  has_many :reviews
  has_many :users

end
