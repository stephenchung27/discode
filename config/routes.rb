Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :servers, only: [:index, :show, :create, :update]
    resources :server_memberships, only: [:create, :destroy]
    resources :chat_channels, only: [:index, :create, :update, :destroy]
    resources :channel_messages, only: [:index, :create, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
