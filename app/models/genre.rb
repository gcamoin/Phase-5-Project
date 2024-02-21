class Genre < ApplicationRecord
    has_many :books

    validates :name, presence: true
    validates :image, presence: true
    validates :name, uniqueness: true
end
