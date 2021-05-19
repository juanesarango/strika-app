import './App.css'
import React from 'react'
import LeaderBoard from './components/LeaderBoard'
import VideoList from './components/VideoList'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      isSigned: false,
    }

    this.onAuthenticate = this.onAuthenticate.bind(this)
  }

  onAuthenticate(user) {
    this.setState({ user, isSigned: !!user })
  }

  render() {
    return (
      <Router className="flex flex-col">
        <Navbar onAuthenticate={this.onAuthenticate} />
        {this.state.isSigned ? (
          <div>
            <Switch>
              <Route exact path="/">
                <LeaderBoard user={this.state.user} />
              </Route>
              <Route path="/videos">
                <VideoList user={this.state.user} />
              </Route>
            </Switch>
          </div>
        ) : (
          <div className="bg-gray-50 mt-64">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Ready for the Challenge?</span>
                <span className="block text-indigo-600">
                  Join Strika and challenge your friends
                </span>
              </h2>
            </div>
          </div>
        )}
      </Router>
    )
  }
}

export default App
