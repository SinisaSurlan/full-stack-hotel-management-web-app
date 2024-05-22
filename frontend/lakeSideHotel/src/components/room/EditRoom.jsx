import React, { useEffect } from 'react'
import { useState } from 'react'
import { editRoom } from '../utils/APIFunctions';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getRoomById } from '../utils/APIFunctions';
import { Link } from 'react-router-dom';
import RoomTypeSelector from '../common/RoomTypeSelector';

const EditRoom = () => {
  const[room, setRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: ""
  })


  const[imagePreview, setImagePreview] = useState("");
  const[successMessage, setSuccessMessage] = useState("");
  const[errorMessage, setErrorMessage] = useState("");

  const {roomId} = useParams();

  useEffect(() => {
    const fetchRoom = async () => {
      try { 
        const roomData = await getRoomById(roomId);
        setRoom(roomData);
        setImagePreview(roomData.photo);
      } catch (error) {
        console.log(error);
      }
      
    }
    fetchRoom();
  }, [roomId]);

  

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setRoom({...room, photo: selectedImage});
    setImagePreview(URL.createObjectURL(selectedImage));
  }

  const handleRoomInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if(name === "roomPrice"){
      if(!isNaN(value)){
        value = parseInt(value);
      } else {
        value = "";
      }
      
    }
    setRoom({...room, [name]: value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const success = await editRoom(id, room.photo, room.roomType, room.roomPrice);
      if(success != undefined){
        setSuccessMessage("A new room was added to the database!");
        const updatedRoomData = await getRoomById(roomId);
        setRoom(updatedRoomData);
        setImagePreview("");
        setErrorMessage("");
      } else {
        setErrorMessage("Error updating room");
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error);
    } 
    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");  
    }, 3000);
  }

  return (
    <>
      <section className='container mt-5 mb-5'>
        <div className='row justify-content-center'>
          <div className='col-md-8 col-lg-6'>
            <h2 className='mt-5 mb-2'>Add a New Room</h2>
            {successMessage && <div className='alert alert-success'>{successMessage}</div>}
            {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
            <form onSubmit={handleSubmit} action="">
              <div className='mb-3 '>
                <label htmlFor='roomType' className='form-label'>Room Type</label>
                <div>
                  <RoomTypeSelector handleRoomInputChange={handleRoomInputChange} newRoom={room}/>  
                </div>
              </div>
              <div className='mb-3 '>
                <label htmlFor='roomPrice' className='form-label'>Room Price</label>
                <input type="number" 
                  className='form-control'
                  required
                  id='roomPrice'
                  name = 'roomPrice'
                  value={room.roomPrice}
                  onChange={handleRoomInputChange} 
                />
              </div>
              <div className='mb-3 '>
                <label htmlFor='photo' className='form-label'>Room Photo</label>
                <input 
                  type="file"
                  id = "photo"
                  name = "photo"
                  className='form-control'
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <img src={imagePreview}
                    alt='Preview room photo'
                    style={{maxWidth: "400px", maxHeight: "400px"}}
                    className='mb-3'
                  />
                )}
              </div>
              <div className='d-grid d-md-flex mt-2'>
                <button className='btn btn-outline-primary ml-5'>Edit Room</button>
                <Link to={"/existing-rooms"} className='btn btn-outline-secondary'>Go back</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default EditRoom
