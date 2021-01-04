import consumer from "./consumer"

consumer.subscriptions.create("ProductsChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    const storeElement = $("main.store")
    const cartElement = $("#cart")
    const productElement = $(`#product-${data.current_product}`)
    if (storeElement) {
      storeElement.innerHTML = data.store
    }
    if(cartElement) {
      cartElement.innerHTML = data.cart
    }
    if(productElement) {
      $("li").removeClass("line-item-highlight")
      productElement.addClass("line-item-highlight")
    }
  }
});
