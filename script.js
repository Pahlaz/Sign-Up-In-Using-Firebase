(function () {
	'use strict'

	const reg_btn = $('#reg-btn');
	const login_btn = $('#login-btn');
	const logout_btn = $('#logout-btn');
	const google_signin_btn = $('#google-signin-btn');
	const fb_signin_btn = $('#fb-signin-btn');
	const twitter_signin_btn = $('#twitter-signin-btn');

	var google_provider = new firebase.auth.GoogleAuthProvider();
	var fb_provider = new firebase.auth.FacebookAuthProvider();
	var twitter_provider = new firebase.auth.TwitterAuthProvider();


	// Initialize Firebase
  const config = {
    apiKey: "AIzaSyCJ1nZG_5m_WLvphq55LSGdkH9TWVGJWNw",
    authDomain: "test-app-154512.firebaseapp.com",
    databaseURL: "https://test-app-154512.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "130826293377"
  };
  firebase.initializeApp(config);


  // Register User Event
  reg_btn.on('click', e => {
  	const email = $('#email').val();
  	const pass = $('#pass').val();
  	const auth = firebase.auth();

  	const promise = auth.createUserWithEmailAndPassword(email, pass);
  	promise.catch(e => $("#log").text(e.message));
  });
  // Login User Event
  login_btn.on('click', e => {
  	const email = $('#email').val();
  	const pass = $('#pass').val();
  	const auth = firebase.auth();

  	const promise = auth.signInWithEmailAndPassword(email, pass);
 		promise.catch(e => $("#log").text(e.message));
  });
  // Logout User Event
  logout_btn.on('click', e => {
  	const promise = firebase.auth().signOut();
  	promise.catch($("#log").text("Something went wrong"));
  });
  firebase.auth().onAuthStateChanged(user => {
  	if(user){
  		// Test purpose
  		console.log(user);
			
			logout_btn.removeClass('hide');
			login_btn.addClass('hide');
  	}else{
  		// Test purpose
  		console.log('Not logged in');

  		logout_btn.addClass('hide');
  		login_btn.removeClass('hide');
  	}
  });


  // Google Signin
  google_signin_btn.on('click', e => {
  	firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a Google Access Token. You can use it to access the Google API.
		  var token = result.credential.accessToken;
		  // The signed-in user info.
		  var user = result.user;
		  // ...
		  alert("You are successfully login using Google");
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  // ...
		});
  });


  // Facebook Signin
  fb_signin_btn.on('click', e => {
  	firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
		  var token = result.credential.accessToken;
		  // The signed-in user info.
		  var user = result.user;
		  // ...
		  alert("You are successfully login using Facebook");
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  // ...
		});
  });


  // Twitter Signin
  twitter_signin_btn.on('click', e => {
  	firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
		  // You can use these server side with your app's credentials to access the Twitter API.
		  var token = result.credential.accessToken;
		  var secret = result.credential.secret;
		  // The signed-in user info.
		  var user = result.user;
		  // ...
		  alert("You are successfully login using Twitter");
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  // ...
		});
  });



})();