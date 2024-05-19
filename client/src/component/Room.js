import { useState, useEffect } from 'react';
import axios from 'axios';

const apiServer = process.env.REACT_APP_API_SERVER;
console.log(apiServer);

const RoomData = () => {
    const [roomList, setRoomList] = useState([]);
    const [editRoomId, setEditRoomId] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        roomNumber: '',
        bedInfo: ''
    });

    useEffect(() => {
        fetchRoom();
    }, []);

    const fetchRoom = async () => {
        try{
            const response = await axios.get(`${apiServer}/rooms/api`);
            setRoomList(response.data);
        } catch (error) {
            console.error('Error fetching rooms:', error);
        }
    };

    const handleEditClick = (room) => {
        setEditRoomId(room.id);
        setFormData({
            id: room.id,
            name: room.name,
            roomNumber: room.roomNumber,
            bedInfo: room.bedInfo
        });
    };

    const handleInputChange = (e) => {
        const  { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCancelClick = () => {
        setEditRoomId(null);
        setFormData({id: '', name: '', roomNumber: '', bedInfo: ''});
    };

    const handleSaveClick = async () => {
        try{
            await axios.put(`${apiServer}/rooms/api/${formData.id}`, formData);
            fetchRoom();
            setEditRoomId(null);
        } catch (error) {
            console.error('Error saving room:', error);
        }
    };

    const handleDeleteClick = async (roomId) => {
        try{
            await axios.delete(`${apiServer}/rooms/api/${roomId}`);
            fetchRoom();
        } catch (error) {
            console.error('Error deleting room:', error);
        }
    };

    return (
        <>
            <div className="container">
                <h1>Room data as restful API, fetched by ReactJS</h1>
                <div className="table-container">
                    <table className="table">
                        <thead className="sticky-header">
                            <tr>
                                <th>Name</th>
                                <th>Room Number</th>
                                <th>Bed Info</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roomList.map(room => (
                                <tr key={room.id}>
                                    {editRoomId === room.id ? (
                                        <>
                                          <td><input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-control" /></td>
                                          <td><input type="text" name="roomNumber" value={formData.roomNumber} onChange={handleInputChange} className="form-control" /></td>
                                          <td><input type="text" name="bedInfo" value={formData.bedInfo} onChange={handleInputChange} className="form-control" /></td>
                                          <td>
                                            <button className="btn btn-success btn-sm" onClick={handleSaveClick}>Save</button>
                                            <button className="btn btn-warning btn-sm ml-2" onClick={handleCancelClick}>Cancel</button>
                                          </td>
                                        </>
                                    ) : (
                                        <>
                                          <td>{room.name}</td>
                                          <td>{room.roomNumber}</td>
                                          <td>{room.bedInfo}</td>
                                          <td>
                                            <button className="btn btn-primary btn-sm" onClick={() => handleEditClick(room)}>Edit</button>
                                            <button className="btn btn-danger btn-sm ml-2"  onClick={() => handleDeleteClick(room.id)}>Delete</button>
                                          </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default RoomData;