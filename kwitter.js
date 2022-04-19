function Login(){
    userName=document.getElementById("username").value;
    localStorage.setItem("User",userName);
    window.location="kwitter_room.html";
}