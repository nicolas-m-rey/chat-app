import consumer from "channels/consumer"

consumer.subscriptions.create( {channel: "MessagesChannel"}, {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    // Called when there's incoming data on the websocket for this channel
    this.appendLine(data)
  },

  appendLine(data) {
    const html = this.createLine(data)
    const element = document.querySelector("[data-chat-room='Best Room']")
    element.insertAdjacentHTML("beforeend", html)
  },

  createLine(data) {
      return ' <li id="message-box" class="flex justify-start msg-' + data["id"] + '"> <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow cont-' + data["id"] + '"> <span class="block">' + data["content"] + '</span> </div> </li> '
    
  }
});