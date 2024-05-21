import './App.css'
import AddRoom from './components/room/AddRoom'
import ExistingRooms from './components/room/ExistingRooms'
import Home from './components/home/Home'
import EditRoom from './components/room/EditRoom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-room/:id" element={<EditRoom />} />
          <Route path="/existing-rooms" element={<ExistingRooms />} />
          <Route path="/add-room" element={<AddRoom />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
