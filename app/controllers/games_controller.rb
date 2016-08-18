class GamesController < ApplicationController
	 before_action :authenticate_user!, only: [:play, :show]
  def index
  	@games=Game.all
  end

  def show
    @games=Game.all
  	@game=Game.find(params[:id])
    @score=Ranking.where(:user_id => current_user.id)
  end

  def play
  	
  end

  def score
    @game=Game.find(params[:id])
    @score=params[:score].to_i
    @ranking=Ranking.create({game_id:@game.id, user_id: current_user.id, score: @score})
    pry
    redirect_to "/"
  end
end
