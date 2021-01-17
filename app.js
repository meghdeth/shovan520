
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB3S69i8FarDug-SAe0uu39sWA9ZpwSnb8",
    authDomain: "cv-contactform.firebaseapp.com",
    projectId: "cv-contactform",
    storageBucket: "cv-contactform.appspot.com",
    messagingSenderId: "307264607113",
    appId: "1:307264607113:web:2850ce8c0a5ba29b9b0758"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("feedback")
document.querySelector(".contactform").addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;

    saveContactInfo(name,email,subject,message);
    document.querySelector(".contact-form").reset()
}

function saveContactInfo(name, email, message, subject) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
}

function showmessage(){
    document.getElementById("showmessage").innerHTML = "Message Sent";
}