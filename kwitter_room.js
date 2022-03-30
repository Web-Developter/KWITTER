
var firebaseConfig = {
      apiKey: "AIzaSyBGCYnxzVTJBCFWZ5fSpMyweDJlw1nQF7w",
      authDomain: "kwitter-ffb2e.firebaseapp.com",
      databaseURL: "https://kwitter-ffb2e-default-rtdb.firebaseio.com",
      projectId: "kwitter-ffb2e",
      storageBucket: "kwitter-ffb2e.appspot.com",
      messagingSenderId: "979693691576",
      appId: "1:979693691576:web:4a8fa31d5319d63c1cca4d"
    };
    
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getitem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      console.log("room_name " + Room_names);

      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML = row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}