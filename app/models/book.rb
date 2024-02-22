class Book < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    belongs_to :genre

    validates :title, presence: true
    validates :author, presence: true
    validates :image, presence: true
    validates :pages, presence: true
    validates :title, uniqueness: {
        scope: [:genre_id]
    }
end
