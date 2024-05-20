import axious from 'axios';


export const addRoom = async (photo, roomType, roomPrice) => {
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("roomType", roomType);
    formData.append("roomPrice", roomPrice);
    try {
        const response = await axious.post("http://localhost:9192/rooms/add/new-room", formData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getRoomTypes = async () => {
    try {   
        const response = await axious.get("http://localhost:9192/rooms/room/types");
        return response.data;
    } catch (error) {
        console.log(error);
    }   
}


