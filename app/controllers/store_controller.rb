class StoreController < ApplicationController
  def index
    @products = Product.order(:title)
    @time = Time.now.strftime("%I:%M %p %d/%m/%Y")
  end
end
