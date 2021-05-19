import React from 'react'
import AuthScreen from './Authenticate'
import { Link } from 'react-router-dom'
class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
      showModal: false,
      user: null,
      isSigned: false,
    }

    this.auth = React.createRef()
    this.setShowModal = this.setShowModal.bind(this)
    this.setIsMenuOpen = this.setIsMenuOpen.bind(this)
    this.setAuthentication = this.setAuthentication.bind(this)
    this.logout = this.logout.bind(this)
  }

  setAuthentication(user) {
    this.setState({ user, showModal: !user, isSigned: !!user })
    this.props.onAuthenticate(user)
  }

  setIsMenuOpen(value) {
    this.setState({ isMenuOpen: value })
  }

  setShowModal(value) {
    this.setState({ showModal: value })
  }

  logout() {
    console.log('Logging Out')
    this.auth.current.logout()
  }

  render() {
    return (
      <div className="py-5 justify-between max-w-full px-8 bg-gray-100">
        <div className="relative flex grid items-center grid-cols-6 lg:grid-cols-6">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center lg:mx-4"
          >
            <svg
              className="w-8 text-indigo-600"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Strika
            </span>
          </a>

          <ul className="flex items-center space-x-8 lg:flex text-indigo-600 text-lg">
            <Link to="/">Leaderboard</Link>
            <Link to="/videos">Videos</Link>
          </ul>

          <ul className="flex items-center space-x-8 lg:flex"></ul>
          <ul className="flex items-center space-x-8 lg:flex"></ul>
          <ul className="flex items-center space-x-8 lg:flex"></ul>

          <ul className="flex items-center ml-auto space-x-16 lg:flex">
            {!this.state.isSigned ? (
              <li>
                <span
                  onClick={() => this.setShowModal(true)}
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-600"
                >
                  Sign in / Sign up
                </span>
              </li>
            ) : (
              <li>
                <div
                  style={{ cursor: 'default' }}
                  className="inline-block items-center justify-center text-center h-12 px-6 font-medium tracking-wide text-indigo-600"
                >
                  {this.state.user.displayName}{' '}
                  <span
                    onClick={() => this.logout()}
                    style={{ cursor: 'pointer' }}
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-indigo-600"
                  >
                    <br />
                    (Log out)
                  </span>
                  <br />
                  <span className="text-xs text-indigo-500">
                    {this.state.user.email}
                  </span>
                </div>
              </li>
            )}
          </ul>

          <AuthScreen
            ref={this.auth}
            showModal={this.state.showModal}
            onShowModalChange={this.setShowModal}
            onAuthenticate={this.setAuthentication}
          />
        </div>
      </div>
    )
  }
}

export default Navbar
