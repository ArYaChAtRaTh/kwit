var firebaseConfig = {
      apiKey: "AIzaSyClO2MQXJ5FgsZgTbSV_X9j-Ec6VQcoFT0",
      authDomain: "kwitter-49b62.firebaseapp.com",
      databaseURL: "https://kwitter-49b62-default-rtdb.firebaseio.com",
      projectId: "kwitter-49b62",
      storageBucket: "kwitter-49b62.appspot.com",
      messagingSenderId: "914179790091",
      appId: "1:914179790091:web:9f3a6779aedcb81e953e0e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}
