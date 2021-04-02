import React from 'react'
import fromUnixTime from 'date-fns/fromUnixTime'
import format from 'date-fns/format'

class LeaderBoard extends React.Component {
  state = {
    scores: [],
  }

  async componentDidMount() {
    const response = await fetch(
      'https://hs0w3cqnse.execute-api.us-east-1.amazonaws.com/dev/scores/pushups'
    )
    const scores = await response.json()
    // save it to your components state so you can use it during render
    this.setState({ scores })
    console.log(scores)
  }

  // const friends = [
  //   {
  //     profile: 'ana-itonishvili-Fyl8sMC2j2Q-unsplash.jpg',
  //     name: 'Ana',
  //     lastSession: 'Last Session: Yesterday, 10:30 am',
  //     preferences: ['Yoga 🧘🏼‍♂️', 'Boxing 🥊'],
  //     status: 'Online',
  //   },
  //   {
  //     profile: 'anastase-maragos-fG0p4Qh_aWI-unsplash.jpg',
  //     name: 'Cody',
  //     lastSession: 'Last Session: Today, 11:07 am',
  //     preferences: ['Weights 🏋🏻'],
  //     status: 'Offline',
  //   },
  //   {
  //     profile: 'ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg',
  //     name: 'Ben',
  //     lastSession: 'Last Session: Last Monday, 04:05 am',
  //     preferences: ['Boxing 🥊', 'HIT ⚡️'],
  //     status: 'Online',
  //   },
  //   {
  //     profile: 'ben-parker-OhKElOkQ3RE-unsplash.jpg',
  //     name: 'Charles',
  //     lastSession: 'Last Session: January 20th, 12:10 am',
  //     preferences: ['Crossfit 💪🏼'],
  //     status: 'Offline',
  //   },
  //   {
  //     profile: 'julia-ballew-Gh8QHONEHOE-unsplash.jpg',
  //     name: 'Julia',
  //     lastSession: 'Last Session: Last Thursday, 08:45 am',
  //     preferences: ['Yoga 🧘🏼‍♂️'],
  //     status: 'Online',
  //   },
  //   {
  //     profile: 'karsten-winegeart-Jc-UCKGhIlU-unsplash.jpg',
  //     name: 'Christine',
  //     lastSession: 'Last Session: Yesterday, 9:00 am',
  //     preferences: ['Boxing 🥊', 'HIT ⚡️'],
  //     status: 'Online',
  //   },
  //   {
  //     profile: 'thomas-yohei-BAlBUJb-SXQ-unsplash.jpg',
  //     name: 'Thomas',
  //     lastSession: 'Last Session: Today, 1:30 pm',
  //     preferences: ['Crossfit 💪🏼', 'Yoga 🧘🏼‍♂️'],
  //     status: 'Online',
  //   },
  // ]

  render() {
    const scoreList = this.state.scores
      .sort((a, b) => b.score - a.score)
      .map(({ userId, score, timestamp }, rank) => {
        const userInitial = userId.charAt(0).toLowerCase()
        return (
          <tr key={rank}>
            <td></td>
            <td></td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://cdn.auth0.com/avatars/${userInitial}.png`}
                    alt="profile-pic"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {userId}
                  </div>
                  <div className="text-sm text-gray-500">
                    {format(fromUnixTime(timestamp), 'PPPP')}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-indigo-600 font-semibold">
              <div className="text-lg text-gray-900">{score}</div>
            </td>
            <td className="px-6 text-lg py-4 whitespace-nowrap">
              {rank + 1}&nbsp;&nbsp;&nbsp;&nbsp;
              {rank === 0 ? (
                <span>
                  👑 &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Leader
                  </span>
                </span>
              ) : null}
              {rank === this.state.scores.length - 1 ? (
                <span>
                  🐷 &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Laziest
                  </span>
                </span>
              ) : null}
            </td>
            <td></td>
            <td></td>
          </tr>
        )
      })

    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 xl:rounded-lg">
              <div className="my-5 sm:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Official Leaderboard
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  #PushUpChallenge 💪🏼
                </p>
                <p className="mt-5 max-w-2xl text-xl text-gray-500 sm:mx-auto"></p>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Workout Champions
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total Push-ups
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ranking
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
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
