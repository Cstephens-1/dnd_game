Rails.application.routes.draw do


  resources :non_playables
  resources :inventories
  resources :items
  resources :characters
  resources :users
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/users/:user_id/characters', to: 'characters#user_characters', as: :user_characters
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
