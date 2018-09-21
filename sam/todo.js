(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA5E6RfcmOvenjOBXMQnjWWNv7eD6dgoxM",
    authDomain: "todo-list-app-45.firebaseapp.com",
    databaseURL: "https://todo-list-app-45.firebaseio.com",
    projectId: "todo-list-app-45",
    storageBucket: "todo-list-app-45.appspot.com",
    messagingSenderId: "523510798565"
  };
  firebase.initializeApp(config);
}());


auth.createUserWithEmailAndPassword(email,pass);
auth.onAuthStateChanged(firebaseUser => {});
const txtEmail =document.getElementById('email');
const txtPassword =document.getElementById('password');
const login =document.getElementById('btnlogin');
const signup =document.getElementById('btnsignup');
//login event
login.addEventListener("click",e =>{
  //get email and password
  const email=txtEmail.value;
   const pass=txtPassword.value;
   const auth =firebase.auth();
   const promise=auth.signInWithEmailAndPassword(email,password);
   promise.catch(e => console.log(e.message));
          
});
btnsignup.addEventListener("click",e =>{
  const email=txtEmail.value;
  const pass=txtPassword.value;
  const auth=firebase.auth();
  const promise=auth.createUserWithEmailAndPassword(email,pass)
  promise
  .catch(e=>console.log(e.message));

});
firebase.auth().onAuthStateChanged(firebaseUser =>{
  if (firebaseUser) {
    console.log(firebaseUser);
  }
  else {
    console.log('not logged in');
    btnlogout.classList.add('hide');
  }
});

