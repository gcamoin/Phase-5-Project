Rails.application.routes.draw do
  resources :reviews
  resources :users, only: [:index, :show, :create]
  resources :books, only: [:index, :show, :create]
  resources :genres, only: [:index, :show]
  post "/signup", to: "users#create"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
