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

class AuthScreen extends React.Component {
  constructor(props) {
    super(props)
    this.handleModalClick = this.handleModalClick.bind(this)
  }

  // Configure FirebaseUI.
  uiConfig = {
    signInFlow: 'popup',
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
      .onAuthStateChanged((user) => this.props.onAuthenticate(user))
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  handleModalClick() {
    this.props.onShowModalChange(false)
  }

  logout() {
    firebase.auth().signOut()
  }

  render() {
    return (
      <>
        {this.props.showModal ? (
          <div
            className="fixed z-10 inset-0 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
                onClick={this.handleModalClick}
              ></div>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="inline-block p-20 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <h1 className="text-base text-center pb-10 text-indigo-600 font-semibold tracking-wide uppercase">
                  Type your email to SignIn or Signup
                </h1>
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </div>
            </div>
          </div>
        ) : null}
      </>
    )
  }
}

export default AuthScreen
