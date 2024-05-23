import React from 'react'
import { useParams } from 'react-router-dom'
import { getRoomById } from '../utils/APIFunctions';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

const ViewRoom = () => {
    const [room, setRoom] = useState({
        photo: null,
        roomType: "",
        roomPrice: ""
      })

    const { id } = useParams();
    const [imagePreview, setImagePreview] = useState("");

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

  return (
    <>
      <section className='container mt-5 mb-5'>
        <div className='row justify-content-center'>
          <div className='col-md-8 col-lg-6'>
            <h2 className='mt-5 mb-2'>Room Preview</h2>
                <table className='table table-hover  mt-5 mb-5'>
                    <tbody>
                        <tr className='table-info'>
                            <th scope="col">Key</th>
                            <th scope="col">Value</th>
                        </tr>
                        <tr>
                            <td>Room Id</td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td>Room Type</td>
                            <td>{room.roomType}</td>
                        </tr>
                        <tr>
                            <td>Room Price</td>
                            <td>{room.roomPrice}</td>
                        </tr>
                        <tr>
                            <td>Room Photo</td>
                            <td><img src={imagePreview} alt='Preview room photo' style={{maxWidth: "400px", maxHeight: "400px"}} /></td>
                        </tr>
                    </tbody>
                </table>
              <div className='d-grid d-md-flex mt-2'>
                <Link to={`/edit-room/${id}`} className="btn btn-outline-info me-md-2">
                    Edit Room
                </Link>
                <Link to="/existing-rooms" className="btn btn-outline-danger me-md-2">
                    Go Back
                </Link>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ViewRoom
