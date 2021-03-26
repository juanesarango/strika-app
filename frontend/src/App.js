import './App.css'
import FriendLists from './components/FriendLists'
import SignInScreen from './components/SignIn'

function App() {
  return (
    <div class="flex flex-col">
      <SignInScreen />
      <FriendLists />
    </div>
  )
}

export default App
