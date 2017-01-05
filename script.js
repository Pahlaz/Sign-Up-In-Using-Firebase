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
  	firebase.auth().signInWithRedirect(google_provider);
  });


  // Facebook Signin
  fb_signin_btn.on('click', e => {
  	firebase.auth().signInWithRedirect(fb_provider);
  });


  // Twitter Signin
  twitter_signin_btn.on('click', e => {
  	firebase.auth().signInWithRedirect(twitter_provider);
  });



})();