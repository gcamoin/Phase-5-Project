class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :pages, :image, :reviews
end
