Rails.application.routes.draw do
  get 'reviews/index'
  get 'reviews/show'
  get 'reviews/create'
  get 'reviews/update'
  get 'reviews/delete'
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :skills

end
