import './App.css'
import AddRoom from './components/room/AddRoom'
import ExistingRooms from './components/room/ExistingRooms'
import Home from './components/home/Home'
import EditRoom from './components/room/EditRoom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ViewRoom from './components/room/ViewRoom'
import Navbar from  './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import RoomCart from './components/room/RoomCart';
import RoomListing from './components/room/RoomListing'
import Admin from './components/admin/Admin'

function App() {

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-room/:id" element={<EditRoom />}/>
          <Route path="/existing-rooms" element={<ExistingRooms />} />
          <Route path="/add-room" element={<AddRoom />} />
          <Route path='/view-room/:id' element={<ViewRoom />} />
          <Route path='/browse-all-rooms' element={<RoomListing />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
