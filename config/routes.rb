Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index, :show, :update, :destroy]
    get 'search', to: 'users#search'
    resources :friend_requests, only: [:index, :create, :update, :destroy]
    resources :friends, only: [:index]
    
    resource :session, only: [:create, :destroy]

    # Direct messages
    resources :dms, only: [:index, :create, :destroy]

    resources :servers, only: [:index, :show, :create, :update]
    resources :server_memberships, only: [:create, :index]

    resources :chat_channels, only: [:index, :create, :update, :destroy]

    resources :channel_messages, only: [:index, :create, :destroy]
  end

  mount ActionCable.server, at: "/cable"
end
