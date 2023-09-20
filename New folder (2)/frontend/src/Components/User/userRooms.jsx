

import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {toast } from 'react-toastify';

const UserRooms = () => {
  const [roomDetails, setRoomDetails] = useState([]);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
const [selectedRoomDetils,setSelectedRoomDetails] = useState({
  name : "",
  id : "",
  colIndex : "",
  rowIndex : "",
  roomIndex : ""
})
  const getAllRooms = () => {
    const options = {
      method: 'get',
      headers: {
        'Content-Type': 'Application/json',
        accept: 'Application/json',
      },
    };

    fetch('http://localhost:8000/room/getAll', options)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setRoomDetails(resData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllRooms();
  }, []);

  const toggleBoxColor = () => {
    let {roomIndex, rowIndex, colIndex,id} = selectedRoomDetils
    const updatedRooms = [...roomDetails]
    updatedRooms[roomIndex].boxes[rowIndex][colIndex].is_alloted = !updatedRooms[roomIndex].boxes[rowIndex][colIndex].is_alloted;
    setRoomDetails(updatedRooms);
    setShowModal(false)
    toast.success("Seat allocated successfully", {
      autoClose : 1000
    })
  };
  return (
    <>
      <div className='container'>
        <div className='row'>
          {roomDetails.map((room, roomIndex) => (
            <div key={roomIndex} className='col-lg-4 col-md-6 col-sm-12 my-4 room-container'>
              <p>{room.name}</p>
              <div className='room'>
                {room.boxes.map((row, rowIndex) => (
                  <div className='row' key={rowIndex}>
                    {row.map((box, colIndex) => (
                      <div
                        className={`box ${box.is_alloted ? 'red-box' : 'grey-box'}`}
                        key={box._id}
                        
                        onClick={() => { 
                          
                           if(!box.is_alloted){
                            setSelectedRoomDetails({
                              name : room.name,
                              id : box._id,
                              rowIndex : rowIndex,
                              colIndex : colIndex,
                              roomIndex : roomIndex,
                              
                            })
                            setShowModal(true)
                            
                           }
                          else{
                            toast.error("Not available", {
                              autoClose: 900, // Set the autoClose time in milliseconds (2 seconds in this example)
                            });
                          }
                          
                        }} // Open the modal when a box is clicked
                      >
                        <i class="fa-solid fa-couch"></i>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Want to book seat in {selectedRoomDetils.name}?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={toggleBoxColor}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserRooms;
