
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC79Ys4KumbDFLzY91TY3rEozlWOXj2OmM",
      authDomain: "groupchat-b5f9b.firebaseapp.com",
      databaseURL: "https://groupchat-b5f9b-default-rtdb.firebaseio.com",
      projectId: "groupchat-b5f9b",
      storageBucket: "groupchat-b5f9b.appspot.com",
      messagingSenderId: "854719483173",
      appId: "1:854719483173:web:e6bc521237eded2e0a9ecc",
      measurementId: "G-9BDX6SB48C"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     username=localStorage.getItem("User");
     document.getElementById("name").innerHTML="Welcome " + username + "😁";
     
     function addRoom(){
           roomName=document.getElementById("room").value;
           firebase.database().ref("/").child(roomName).update({
                 purpose:"adding room name"
           });
           localStorage.setItem("room name", roomName);
           window.location="kwitter_page.html";

     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room name" , name);
      window.location="kwitter_page.html";
}

function Logout(){
      localStorage.removeItem("User");
      localStorage.removeItem("room name");
      window.location="index.html";
}
