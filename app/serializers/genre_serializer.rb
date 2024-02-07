class GenreSerializer < ActiveModel::Serializer
  attributes :id, :name, :books
end
