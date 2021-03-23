import './App.css'

const firebaseConfig = {
  apiKey: 'AIzaSyAWZN68ORUCoheR5s-jbMvQF0NiB1hwCkU',
  authDomain: 'strika-app.firebaseapp.com',
  projectId: 'strika-app',
  storageBucket: 'strika-app.appspot.com',
  messagingSenderId: '801660555749',
  appId: '1:801660555749:web:4bc653ef179762358f5f0c',
  measurementId: 'G-CEDBLFHQNQ',
}

function App() {
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
    ({ profile, name, lastSession, preferences, status }) => {
      return (
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <img
                  class="h-10 w-10 rounded-full"
                  src={'https://profiles-friends.s3.amazonaws.com/' + profile}
                  alt=""
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">{name}</div>
                <div class="text-sm text-gray-500">{lastSession}</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
              {preferences.map((p) => (
                <p>{p}</p>
              ))}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${
                status === 'Online' ? 'green' : 'red'
              }-100 text-${status === 'Online' ? 'green' : 'red'}-800`}
            >
              {status}
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">
              {status === 'Online' ? 'Invite to Workout Session' : ''}
            </a>
          </td>
        </tr>
      )
    }
  )

  return (
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 xl:rounded-lg">
            <div class="my-5 sm:text-center">
              <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Invite your friends
              </h2>
              <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A better way to train
              </p>
              <p class="mt-5 max-w-2xl text-xl text-gray-500 sm:mx-auto"></p>
            </div>
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Workout Friends
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Preferences
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Invite</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                {friendsList}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
