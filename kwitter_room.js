
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDvBQIu_KeaQROaG6tpev3xynttrx_Dm6I",
      authDomain: "chat-app-583c8.firebaseapp.com",
      databaseURL: "https://chat-app-583c8-default-rtdb.firebaseio.com",
      projectId: "chat-app-583c8",
      storageBucket: "chat-app-583c8.appspot.com",
      messagingSenderId: "77636271825",
      appId: "1:77636271825:web:d78936fa664ede6a800ff0",
      measurementId: "G-4HQ06ZD6H9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

