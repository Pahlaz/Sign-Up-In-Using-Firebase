(function () {
	'use strict'

	// Initialize Firebase
  const config = {
    apiKey: "AIzaSyCJ1nZG_5m_WLvphq55LSGdkH9TWVGJWNw",
    authDomain: "test-app-154512.firebaseapp.com",
    databaseURL: "https://test-app-154512.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "130826293377"
  };
  firebase.initializeApp(config);

  
  // FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: 'https://pahlaz.github.io/Sign-Up-In-Using-Firebase/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    // tosUrl: '<your-tos-url>'
  };
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);


})();