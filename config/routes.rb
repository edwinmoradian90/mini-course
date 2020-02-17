Rails.application.routes.draw do
  root to: 'pages#index'
  get 'episodes', to: 'pages#episodes'
end
