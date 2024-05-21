import React from 'react'
import { useState } from 'react'


const RoomFilter = ({ data, setFiltered, handleSelectChange }) => {
    const [filter, setFilter] = useState("");
  
    const handleClearFilter = () => {
      setFilter("");
      setFiltered(data);
    };
  
    const roomTypes = data
      ? ["", ...new Set(data.map((room) => room.roomType))]
      : [];
  
    return (
      <div className="input-group mb-3">
        <span className="input-group-text" id="room-type-filter">
          Filter rooms by room type:
        </span>
        <select
          className="form-select"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="">select a room type to filter...</option>
          {roomTypes.map((roomType, index) => (
            <option key={index} value={roomType}>
              {roomType}
            </option>
          ))}
        </select>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleClearFilter}
        >
          Clear filter
        </button>
      </div>
    );
  };

export default RoomFilter
