// Added 18/10/2021
 const ws = new WebSocket("ws://localhost:8080");


ws.addEventListener("open", () => {

    alert("Connect to server! ");

});

ws.addEventListener("message", e => {
    document.getElementById("list").innerHTML += "<p> Player: " + JSON.parse(e.data) + "</p>";
});

function send(data) {
    data = document.getElementById("message").value;
     if (data == "")
     {
         return;
     }
     else
     {
     ws.send(data);
     }
 }

// Added 18/10/2021