Rails.application.routes.draw do


  resources :inventory_items
  resources :inventories
  resources :items
  resources :non_playables
  resources :characters do 
    resource :inventory, only: [:show]
    post 'add_item/:item_id', to: 'inventories#add_item', as: :add_item

  end
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
