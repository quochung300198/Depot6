class StoreController < ApplicationController
  include CurrentCounter
  include CurrentCart
  before_action :set_cart
  before_action :set_counter, only: [:index]

  def index
    @products = Product.all.order(:title)
    @time = "#{Time.now.strftime("%I:%M %p")}<br>#{Time.now.strftime("%d/%m/%Y")}".html_safe
    @counter = session[:counter]
  end
end
