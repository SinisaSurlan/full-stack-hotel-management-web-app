import React from 'react'
import { getRoomById, editRoom } from '../utils/APIFunctions';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomTypeSelector from '../common/RoomTypeSelector';
import { Link } from 'react-router-dom';

const EditRoom = () => {

  const [room, setRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: ""
  })


  const[imagePreview, setImagePreview] = useState("");
  const[successMessage, setSuccessMessage] = useState("");
  const[errorMessage, setErrorMessage] = useState("");

  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRoomById(id);
      setRoom(data);
      const binary = atob(data.photo);
      const array = [];
      for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      const blob = new Blob([new Uint8Array(array)], { type: 'image/png' });
      const url = URL.createObjectURL(blob);
      setImagePreview(url);
      console.log(data);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const success = await editRoom(id, room.photo, room.roomType, room.roomPrice);
      if(success != undefined){
        setSuccessMessage("A new room was added to the database!");
        setRoom({photo:null, roomType:"", roomPrice:""});
        setImagePreview("");
        setErrorMessage("");
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setErrorMessage("Error adding room");
      }
    } catch (error) {
      setErrorMessage(error.message);
    } 
    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");  
    }, 3000);
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

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setRoom({...room, photo: selectedImage});
    setImagePreview(URL.createObjectURL(selectedImage));
  }

  return (
    <>
      <section className='container mt-5 mb-5'>
        <div className='row justify-content-center'>
          <div className='col-md-8 col-lg-6'>
            <h2 className='mt-5 mb-2'>Edit existing Room</h2>
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
                <button type='submit' className='btn btn-outline-primary me-md-2'>Edit Room</button>
                <Link to="/existing-rooms" className='btn btn-outline-danger me-md-2'>Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default EditRoom
