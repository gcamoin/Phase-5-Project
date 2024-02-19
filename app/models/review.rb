class Review < ApplicationRecord
    belongs_to :book
    belongs_to :user

    validates :content, presence: true
    validates :content, length:{maximum: 200}
    validates :user_id, uniqueness: {
        scope: [:book_id]
    }
end
