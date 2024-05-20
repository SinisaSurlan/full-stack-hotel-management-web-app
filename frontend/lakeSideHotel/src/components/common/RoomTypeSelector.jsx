import React from 'react'
import { getRoomTypes } from '../utils/APIFunctions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
    const [roomTypes, setRoomTypes] = useState([]);
    const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false);
    const [newRoomType, setNewRoomType] = useState("");

    useEffect(() => {
        getRoomTypes().then((data) => {
            if (data !== undefined && data !== null) {
                setRoomTypes(data);
            } else {
                console.warn("Got null or undefined response from API function getRoomTypes");
            }
        }).catch((error) => {
            console.error("Error retrieving room types:", error);
        });
    }, []);

    const handleChangeNewRoomType = event => {
        const { target: { value } } = event;
        setNewRoomType(value);
    };

    const handleAddNewRoomType = () => {
        if (newRoomType !== null && newRoomType !== "" && roomTypes !== null) {
            try {
                setRoomTypes([...roomTypes, newRoomType]);
                setNewRoomType("");
                setShowNewRoomTypeInput(false);
            } catch (error) {
                console.error("Error adding new room type:", error);
            }
        } else {
            console.warn("Skipping adding new room type because newRoomType is null, empty, or roomTypes is null");
        }
    };

    return (
        <>
            <>
                {roomTypes !== null && roomTypes.length > 0 && (
                    <div>
                    <select
                        className='form-select'
                        name="roomType"
                        id="roomType"
                        value={newRoom.roomType}
                        onChange={(event) => {
                            if (event.target.value === "Add new") {
                            setShowNewRoomTypeInput(true);
                            } else {
                            handleRoomInputChange(event);
                            }
                        }}
                    >
                        <option value="">Select a room type</option>
                        <option value="Add new">Add new</option>
                        {roomTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                    {showNewRoomTypeInput && (
                        <div className="input-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter a new room type"
                            onChange={handleChangeNewRoomType}
                        />
                        <button className="btn btn-hotel" type="button" onClick={handleAddNewRoomType}>
                            Add
                        </button>
                        </div>
                    )}
                    </div>
                )}
            </>
        </>
    );
}

export default RoomTypeSelector
