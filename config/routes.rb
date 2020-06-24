# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'pages#home'
  namespace :api do
    namespace :v1 do
      resources :todos
    end
  end
end
