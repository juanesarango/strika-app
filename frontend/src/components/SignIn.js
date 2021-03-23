import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'

// configure firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAWZN68ORUCoheR5s-jbMvQF0NiB1hwCkU',
  authDomain: 'strika-app.firebaseapp.com',
  projectId: 'strika-app',
  storageBucket: 'strika-app.appspot.com',
  messagingSenderId: '801660555749',
  appId: '1:801660555749:web:4bc653ef179762358f5f0c',
  measurementId: 'G-CEDBLFHQNQ',
}
firebase.initializeApp(firebaseConfig)

class SignInScreen extends React.Component {
  state = {
    isSignedIn: false,
  }

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }))
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      )
    }
    return (
      <div>
        <h1>My App</h1>
        <p>
          Welcome {firebase.auth().currentUser.displayName}! You are now
          signed-in!
        </p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    )
  }
}

export default SignInScreen
