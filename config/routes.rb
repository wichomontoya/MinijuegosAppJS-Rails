Rails.application.routes.draw do

	resources :games do
      	get :play
      	resources :user
     end
    post "/games/:id/score" => "games#score", as: "score"

	devise_for :users, controllers: {
        sessions: 'users/sessions', registrations: 'users/registrations'
      }



  root to: 'games#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
