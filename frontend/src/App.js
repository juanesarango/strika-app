import './App.css'
// import FriendLists from './components/FriendLists'
import LeaderBoard from './components/LeaderBoard'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <LeaderBoard />
      {/* <FriendLists /> */}
    </div>
  )
}

export default App
