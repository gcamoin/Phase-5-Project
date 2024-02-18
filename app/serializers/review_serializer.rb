class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :book_id

  has_one :user
  has_one :book

  
end
