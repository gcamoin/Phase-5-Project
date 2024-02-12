Rails.application.routes.draw do
  resources :reviews
  resources :users, only: [:index, :show, :create]
  resources :books, only: [:index, :show, :create]
  resources :genres, only: [:index, :show, :create]
  get '/genres/:id', to: 'genres#show'
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
