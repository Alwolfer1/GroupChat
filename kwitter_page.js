//YOUR FIREBASE LINKS
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
     Room=localStorage.getItem("room name");

     function Sent(){
           msg= document.getElementById("message").value;
           firebase.database().ref(Room).push({
                 name: username,
                 message: msg,
                 like: 0
           });
           document.getElementById("message").value="";
     }

function getData() { firebase.database().ref("/"+Room).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
nameTag="<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
MsgTag="<h3 class='message_h4'>" + message + "</h3>";
LikeButton= "<button class='btn btn-info' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
Thumb="<span class='glyphicon glyiphicon-thumbs-up'> Like:" + like + "</span></button> <hr>";
Row=nameTag+MsgTag+LikeButton+Thumb;
document.getElementById("output").innerHTML += Row;



//End code
      } });  }); }
getData();
function updateLike(message_id) { console.log("clicked on like button - " + message_id); button_id = message_id; likes = document.getElementById(button_id).value; updated_likes = Number(likes) + 1; console.log(updated_likes); 
firebase.database().ref(Room).child(message_id).update({ like : updated_likes }); }

function Logout(){
      localStorage.removeItem("User");
      localStorage.removeItem("room name");
      window.location="index.html";
}