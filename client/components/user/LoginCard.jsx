import React from 'react';
import axios from 'axios';
import firebase from 'firebase';
import ManualUser from './ManualUser.jsx';
import GoogleUser from './GoogleUser.jsx';
import firebaseConfig from '../../../server/firebaseConfig.js';


// Initialize Firebase
// TODO: Replace with your project's customized code snippet

firebase.initializeApp(firebaseConfig.firebaseConfig);

class LoginCard extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
    this.getToken = this.getToken.bind(this);
  }

  getToken() {
    console.log('working')
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then((idToken) => {
          //  Send token to your backend via HTTPS
            console.log(idToken);
          const url = `/thing?access_token=, ${idToken}`;
          axios.get(url).then(result => console.log(result)).catch(error => error);
        }).catch(error => error);
      } else {
        console.log('Nobody is home: Need to login or sign up!');
      }     
    });
  }

  render() {
    return (
      <div className="loginCard">
        <ManualUser />
        <GoogleUser />
        <button  onClick={ (e)=> this.getToken(e) }>
        Get and send to token to server
        </button>
      </div>
    );
  }
}
export default LoginCard;