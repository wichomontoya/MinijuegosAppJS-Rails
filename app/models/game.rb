class Game < ApplicationRecord
	
	has_many :rankings
	has_many :users, :through => :rankings
end
