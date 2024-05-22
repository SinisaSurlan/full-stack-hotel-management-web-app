import axios from 'axios';


export const addRoom = async (photo, roomType, roomPrice) => {
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("roomType", roomType);
    formData.append("roomPrice", roomPrice);
    try {
        const response = await axios.post("http://localhost:9192/rooms/add/new-room", formData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getRoomTypes = async () => {
    try {   
        const response = await axios.get("http://localhost:9192/rooms/room/types");
        return response.data;
    } catch (error) {
        console.log(error);
    }   
}

/**
 * Retrieves all rooms from the API.
 *
 * @return {Promise<Array>} A promise that resolves to an array of room objects.
 * @throws {Error} If there is an error retrieving the rooms.
 */
export const getAllRooms = async() => {
    try {
        const response = await axios.get("http://localhost:9192/rooms/all-rooms");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


/**
 * Deletes a room from the server.
 *
 * @param {string} id - The ID of the room to be deleted.
 * @return {Promise<any>} A promise that resolves to the response data from the server.
 */ 
export const deleteRoom = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:9192/rooms/delete/room/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
// This function updates a room
export const editRoom = async (id, photo, roomType, roomPrice) => {
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("roomType", roomType);
    formData.append("roomPrice", roomPrice);
    try {
        const response = await axios.put(`http://localhost:9192/rooms/edit/room/${id}`, formData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// This function get a room by id
export async function getRoomById(id) {
    try {
        const response = await axios.get(`http://localhost:9192/rooms/room/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error retrieving room data ${error.message}`);
    }      
}


