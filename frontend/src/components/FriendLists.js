function FriendList() {
  const friends = [
    {
      profile: 'ana-itonishvili-Fyl8sMC2j2Q-unsplash.jpg',
      name: 'Ana',
      lastSession: 'Last Session: Yesterday, 10:30 am',
      preferences: ['Yoga 🧘🏼‍♂️', 'Boxing 🥊'],
      status: 'Online',
    },
    {
      profile: 'anastase-maragos-fG0p4Qh_aWI-unsplash.jpg',
      name: 'Cody',
      lastSession: 'Last Session: Today, 11:07 am',
      preferences: ['Weights 🏋🏻'],
      status: 'Offline',
    },
    {
      profile: 'ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg',
      name: 'Ben',
      lastSession: 'Last Session: Last Monday, 04:05 am',
      preferences: ['Boxing 🥊', 'HIT ⚡️'],
      status: 'Online',
    },
    {
      profile: 'ben-parker-OhKElOkQ3RE-unsplash.jpg',
      name: 'Charles',
      lastSession: 'Last Session: January 20th, 12:10 am',
      preferences: ['Crossfit 💪🏼'],
      status: 'Offline',
    },
    {
      profile: 'julia-ballew-Gh8QHONEHOE-unsplash.jpg',
      name: 'Julia',
      lastSession: 'Last Session: Last Thursday, 08:45 am',
      preferences: ['Yoga 🧘🏼‍♂️'],
      status: 'Online',
    },
    {
      profile: 'karsten-winegeart-Jc-UCKGhIlU-unsplash.jpg',
      name: 'Christine',
      lastSession: 'Last Session: Yesterday, 9:00 am',
      preferences: ['Boxing 🥊', 'HIT ⚡️'],
      status: 'Online',
    },
    {
      profile: 'thomas-yohei-BAlBUJb-SXQ-unsplash.jpg',
      name: 'Thomas',
      lastSession: 'Last Session: Today, 1:30 pm',
      preferences: ['Crossfit 💪🏼', 'Yoga 🧘🏼‍♂️'],
      status: 'Online',
    },
  ]

  const friendsList = friends.map(
    ({ profile, name, lastSession, preferences, status }, index) => {
      return (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src={'https://profiles-friends.s3.amazonaws.com/' + profile}
                  alt=""
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{name}</div>
                <div className="text-sm text-gray-500">{lastSession}</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              {preferences.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${
                status === 'Online' ? 'green' : 'red'
              }-100 text-${status === 'Online' ? 'green' : 'red'}-800`}
            >
              {status}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <span className="text-indigo-600 hover:text-indigo-900">
              {status === 'Online' ? 'Invite to Workout Session' : ''}
            </span>
          </td>
        </tr>
      )
    }
  )

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 xl:rounded-lg">
            <div className="my-5 sm:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Invite your friends
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A better way to train
              </p>
              <p className="mt-5 max-w-2xl text-xl text-gray-500 sm:mx-auto"></p>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Workout Friends
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Preferences
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Invite</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {friendsList}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FriendList
