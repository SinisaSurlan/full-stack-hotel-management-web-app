import React, { useState, useEffect } from 'react';
import Loader from '../layout/loader/Loader';
import { getAllRooms } from '../utils/APIFunctions';
import RoomCart from './RoomCart';
import RoomFilter from '../common/RoomFilter';
import RoomPaginator from '../common/RoomPaginator';
import { Container, Row, Col } from 'react-bootstrap';

const Room = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [roomsPerPage, setRoomsPerPage] = useState(6);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const rooms = await getAllRooms();
                setData(rooms);
                setFilteredData(rooms);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handlePageChange = (pageNumber) => {  
        if (pageNumber && pageNumber > 0) {
            setCurrentPage(pageNumber);
        }
    };

    const calculateTotalPages = (rooms, roomsPerPage) => {
        return rooms.length > 0 ? Math.ceil(rooms.length / roomsPerPage) : 1;
    };

    const handleSelectChange = (event) => {
        const selectedType = event.target.value;
        if (selectedType) {
            const filteredRooms = data.filter(room => room.roomType === selectedType);
            setFilteredData(filteredRooms);
        } else {
            setFilteredData(data);
        }
        setCurrentPage(1); // Reset page number on filter change
    };

    const totalPages = calculateTotalPages(filteredData, roomsPerPage);
    const renderRooms = () => {
        const startIndex = (currentPage - 1) * roomsPerPage;
        const endIndex = startIndex + roomsPerPage;
        return filteredData.slice(startIndex, endIndex).map((room) => (
            room ? <Row key={room.id} className="mt-4 pr-0"><RoomCart  room={room} /></Row> : null
        ));
    };

    if (isLoading) {
        return <Loader />;
    } else if (error) {
        return <p>Error: {error.message}</p>;
    } else {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <RoomFilter
                            data={data}
                            setFilteredData={setFilteredData}
                            handleSelectChange={handleSelectChange}
                        />
                    </Col>
                </Row>
                <Row>{renderRooms()}</Row>
                <Row> 
                    <Col className='d-flex justify-content-center'>
                        <RoomPaginator
                            currentPage={currentPage}
                            totalPages={totalPages}
                            handlePageChange={handlePageChange}
                            roomsPerPage={totalPages}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Room;
