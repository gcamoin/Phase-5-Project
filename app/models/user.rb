class User < ApplicationRecord
    has_many :reviews
    has_many :books, through: :reviews

    validates :user_name, uniqueness: true
    validates :password, length:{minimum: 5}
    validates :email, uniqueness: true
end
