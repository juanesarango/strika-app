import React from 'react'
import fromUnixTime from 'date-fns/fromUnixTime'
import format from 'date-fns/format'

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scores: [],
      newScore: '',
      challenge: 'pushups',
      buttonState: 'post',
    }
    this.queryScores = this.queryScores.bind(this)
    this.postScore = this.postScore.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    if (this.props.user) {
      this.queryScores()
    }
  }

  async queryScores() {
    const idToken = await this.props.user.getIdToken()
    const { challenge } = this.state
    const response = await fetch(
      `https://w4wy1yzxmg.execute-api.us-east-1.amazonaws.com/prod/scores/${challenge}`,
      {
        headers: { Authorization: idToken },
      }
    )
    if (response.status === 401) {
      return console.log('unauthorized')
    }
    const scores = await response.json()
    this.setState({ scores })
  }

  handleChange(event) {
    this.setState({ newScore: event.target.value })
  }

  async postScore(event) {
    event.preventDefault()
    if (!this.state.newScore) return

    this.setState({ buttonState: 'loading' })

    const idToken = await this.props.user.getIdToken()
    const data = {
      userId: this.props.user.displayName,
      score: Number(this.state.newScore),
      challenge: this.state.challenge,
    }
    console.log(data)
    const response = await fetch(
      'https://w4wy1yzxmg.execute-api.us-east-1.amazonaws.com/prod/scores/',
      {
        method: 'POST',
        headers: { Authorization: idToken, 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    )
    if (response.status === 401) {
      return console.log('unauthorized')
    }
    this.setState({ newScore: '', buttonState: 'success' })
    this.queryScores()

    setTimeout(() => {
      this.setState({ buttonState: 'post' })
    }, 4000)
  }

  render() {
    const scoreList = this.state.scores
      .sort((a, b) => b.score - a.score)
      .map(({ userId, score, timestamp }, rank) => {
        const userInitial = userId.charAt(0).toLowerCase()
        return (
          <tr key={rank}>
            <td className="sm:px-6 px-2 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 sm:h-10 sm:w-10 h-8 w-8">
                  <img
                    className="sm:h-10 sm:w-10 rounded-full"
                    src={`https://cdn.auth0.com/avatars/${userInitial}.png`}
                    alt="profile-pic"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div className="ml-4">
                  <div className="sm:text-sm text-xs font-medium text-gray-900">
                    {userId}
                  </div>
                  <div className="sm:text-sm text-xs text-gray-500">
                    {format(fromUnixTime(timestamp), 'PPPP')}
                  </div>
                </div>
              </div>
            </td>
            <td className="sm:px-6 text-center whitespace-nowrap text-indigo-600 font-semibold">
              <div className="sm:text-lg text-md text-gray-900">{score}</div>
            </td>
            <td className="sm:px-6 text-md sm:text-lg py-4 whitespace-nowrap">
              {rank + 1}&nbsp;&nbsp;&nbsp;
              {rank === 0 ? (
                <span>
                  👑 &nbsp;&nbsp;
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Leader
                  </span>
                </span>
              ) : null}
              {rank === this.state.scores.length - 1 ? (
                <span>
                  😴 &nbsp;&nbsp;
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Laziest
                  </span>
                </span>
              ) : null}
            </td>
          </tr>
        )
      })

    const buttonText = {
      post: 'Post New Score',
      loading: 'Posting...',
      success: 'Submitted',
    }[this.state.buttonState]

    return (
      <div className="flex flex-col">
        <form
          className="inline-flex col-span-3 rounded-none"
          onSubmit={this.postScore}
        >
          <label className="col-span-1">
            {/* Post New Score: */}
            <input
              type="number"
              name="newScore"
              min={0}
              className="border m-4 p-1 px-4 leading-loose rounded-none"
              value={this.state.newScore}
              onChange={this.handleChange}
            />
          </label>
          {this.state.buttonState !== 'success' ? (
            <input
              type="submit"
              value={buttonText}
              disabled={this.buttonState === 'loading'}
              className="col-span-1 py-2 px-6 mt-4 mb-4 bg-indigo-600 text-white rounded-none"
            />
          ) : (
            <h3 className="m-4 p-1 leading-loose">
              Your result was successfully posted!
            </h3>
          )}
        </form>

        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 xl:rounded-lg">
              <div className="my-5 text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Official Leaderboard
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  #PushUpsChallenge 💪🏼
                </p>
                <p className="mt-5 max-w-2xl text-xl text-gray-500 sm:mx-auto"></p>
              </div>
              <table className="min-w-full divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Workout Champions
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total Push-ups
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ranking
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {scoreList}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LeaderBoard
