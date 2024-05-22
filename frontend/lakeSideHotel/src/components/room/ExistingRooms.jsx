import React, { useState, useEffect } from 'react';
import RoomFilter from '../common/RoomFilter';
import RoomPaginator from '../common/RoomPaginator';
import Col from 'react-bootstrap/Col';
import { getAllRooms, deleteRoom } from '../utils/APIFunctions';
import {FaTrashAlt, FaEye, FaEdit} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Loader from '../layout/loader/Loader';

const ExistingRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [roomsPerPage, setRoomsPerPage] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');


  const fetchRooms = async () => {
    setIsLoading(true);
    try {
      const response = await getAllRooms();
      setRooms(response);
      setFilteredRooms(response);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'An unknown error occurred while fetching rooms. Please try again later.'
      );
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleSelectChange = (e) => {
    const selectedRoomType = e.target.value;
    setSelectedRoomType(selectedRoomType);
    if (selectedRoomType) {
      setFilteredRooms(rooms.filter((room) => room.roomType.toLowerCase() === selectedRoomType.toLowerCase()));
    } else {
      setFilteredRooms(rooms);
    }
    setActivePage(1);
  };

  const handleDeleteRoom = async (id) => {
    try {
      const result = await deleteRoom(id);
        setSuccessMessage(`Room ${id} deleted successfully!`);
        setTimeout(() => setSuccessMessage(''), 3000);
        fetchRooms();
    } catch (error) {
      setErrorMessage(error.message);
    }
    setTimeout(() => setErrorMessage(''), 3000);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  useEffect(() => {
    setActivePage(1);
  }, [filteredRooms]);

  const calculateTotalPages = (rooms, roomsPerPage) => {
    return rooms.length > 0 ? Math.ceil(rooms.length / roomsPerPage) : 1;
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const lastRoomIndex = activePage * roomsPerPage;
  const firstRoomIndex = lastRoomIndex - roomsPerPage;
  const currentRooms = filteredRooms.slice(firstRoomIndex, lastRoomIndex);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="container mt-5 mb-5">
            <div className="d-flex justify-content-center mb-3 mt-5">
              <h2>Existing Rooms</h2>
            </div>
            <Col md={6} className="mb-3 mb-md-0">
              <RoomFilter data={rooms} setFiltered={setFilteredRooms} handleSelectChange={handleSelectChange} />
            </Col>
            <table className="table table-hover table-bordered">
              <thead>
                <tr className="text-center">
                  <th scope="col">Room Id</th>
                  <th scope="col">Room Type</th>
                  <th scope="col">Room Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                  <>
                    {currentRooms.map((room) => (
                  <tr key={room.id} className="text-center">
                    <td>{room.id}</td>
                    <td>{room.roomType}</td>
                    <td>{room.roomPrice}</td>
                    <td className='gap-2'>
                      <Link to={`/view-room/${room.id}`}>
                        <span className="btn btn-info btn-sm ms-2">
                          <FaEye />
                        </span>
                      </Link>
                      <Link to={`/edit-room/${room.id}`}>
                        <span className="btn btn-warning btn-sm ms-2">
                          <FaEdit />
                        </span>
                      </Link>
                      <button className="btn btn-danger btn-sm ms-2"
                        onClick={() => handleDeleteRoom(room.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
                  </>
              </tbody>
            </table>
            <RoomPaginator
              totalPages={calculateTotalPages(filteredRooms, roomsPerPage)}
              handlePageChange={handlePageChange}
              activePage={activePage}
              roomsPerPage={roomsPerPage}
            />
          </section>
        </>
      )}
    </>
  );
};

export default ExistingRooms;
