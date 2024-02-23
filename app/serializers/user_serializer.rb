class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar

  has_many :reviews
  has_many :books
end
