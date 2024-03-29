import consumer from "channels/consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("something that you will recognize");
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
    const element = document.querySelector("[data-chat-list='Room List']")
    element.insertAdjacentHTML("beforeend", html)
  },

  createLine(data) {
    let text1 = '<a class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none" href= "/rooms/';
    let text2 = '" > <div class="w-full pb-2"><div class="flex justify-between"><span class="block ml-2 font-semibold text-gray-600">';
    let text3 = '</span> </div>';
      return text1.concat(data["room"], text2, data["name"], text3) 
  }
});