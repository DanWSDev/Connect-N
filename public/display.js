const check = window.matchMedia("(max-width: 600px)");

function displaycheck(size){
if (size.matches) {
    alert("test");
    document.getElementById('mobile').innerHTML += '<div class="mnav" id="play" onclick="playscreen()"> PLAY </div>'
    document.getElementById('mobile').innerHTML += '<div class="mnav" id="contactus"> CONTACT US </div>';
}
else
{

}
}

function playscreen(){
    switch (menu){
        case 'play':
            document.getElementById("play").style.display = "none";
            document.getElementById("contactus").style.display = "none";
            document.getElementById("find").style.display = "block";
            document.getElementById("create").style.display = "block";
            document.getElementById("back").style.display = "block";
            break;
        case 'contactus':
            document.getElementById("play").style.display = "none";
            document.getElementById("contactus").style.display = "none";
            document.getElementById("email").style.display = "block";
            document.getElementById("reportbug").style.display = "block";
            document.getElementById("back").style.display = "block";
            break;
        case 'find':
            document.getElementById("find").style.display = "none";
            document.getElementById("create").style.display = "none";
            document.getElementById("back").style.display = "block";
            break;
        case 'create':
            document.getElementById("find").style.display = "none";
            document.getElementById("create").style.display = "none";
            document.getElementById("row").style.display = "block";
            document.getElementById("rowname").style.display = "initial";
            document.getElementById("column").style.display = "block";
            document.getElementById("columnname").style.display = "initial";
            document.getElementById("connect").style.display = "block";
            document.getElementById("connectname").style.display = "initial";
            document.getElementById("firstmove").style.display = "block";
            document.getElementById("done").style.display = "block";
            document.getElementById("back").style.display = "block";
            break;
        case 'back':
            document.getElementById("find").style.display = "block";
            document.getElementById("create").style.display = "block";
            document.getElementById("row").style.display = "none";
            document.getElementById("rowname").style.display = "none";
            document.getElementById("column").style.display = "none";
            document.getElementById("columnname").style.display = "none";
            document.getElementById("connect").style.display = "none";
            document.getElementById("connectname").style.display = "none";
            document.getElementById("firstmove").style.display = "none";
            document.getElementById("done").style.display = "none";
            break;
        case 'done':
            document.getElementById("row").style.display = "none";
            document.getElementById("rowname").style.display = "none";
            document.getElementById("column").style.display = "none";
            document.getElementById("columnname").style.display = "none";
            document.getElementById("connect").style.display = "none";
            document.getElementById("connectname").style.display = "none";
            document.getElementById("firstmove").style.display = "none";
            document.getElementById("done").style.display = "none";
            document.getElementById("pick").style.display = "block";
            document.getElementById("chat").style.display = "block";
            // Server will need give a room id
            break;
    }
}


function send(){
    switch(chat){
        case '1':
            document.getElementById("list").innerHTML += "<p> Player: " + "😂" + "</p>";
            break;

        case '2':
            document.getElementById("list").innerHTML += "<p> Player: " + "🤔" + "</p>";
            break;

        case '3':
            document.getElementById("list").innerHTML += "<p> Player: " + "😭" + "</p>";
            break;

        case '4':
            document.getElementById("list").innerHTML += "<p> Player: " + "😡" + "</p>";
            break;

        case '5':
            document.getElementById("list").innerHTML += "<p> Player: " + "🤯" + "</p>";
            break;
    }
    }

check.addListener(displaycheck);
displaycheck(check);