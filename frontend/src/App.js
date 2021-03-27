import './App.css'
import FriendLists from './components/FriendLists'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <FriendLists />
    </div>
  )
}

export default App
