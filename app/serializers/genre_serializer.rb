class GenreSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :books
end
