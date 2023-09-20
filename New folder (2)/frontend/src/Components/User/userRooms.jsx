import React, { useState, useEffect } from 'react';

const UserRooms = () => {
  const [roomDetails, setRoomDetails] = useState([
    {
      name: 'falcon',
      rows: 5,
      cols: 6,
    },
    {
      name: 'aurum',
      rows: 5,
      cols: 6,
    },
    
    {
      name: 'tardis',
      rows: 5,
      cols: 6,
    }
  ]);

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    createRooms();
  }, []);

  const createRooms = () => {
    const newRooms = roomDetails.map((room) => {
      const { rows, cols } = room;
      const newBoxes = [];

      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
          row.push({ id: `${i}-${j}`, isRed: false });
        }
        newBoxes.push(row);
      }

      return { name: room.name, boxes: newBoxes };
    });

    setRooms(newRooms);

  };

  const toggleBoxColor = (roomIndex, rowIndex, colIndex) => {
    console.log(roomIndex + " " + colIndex + " " + rowIndex)
    const updatedRooms = [...rooms];
    console.log(updatedRooms, "before")
    updatedRooms[roomIndex].boxes[rowIndex][colIndex].isRed = !updatedRooms[roomIndex].boxes[rowIndex][colIndex].isRed;
    setRooms(updatedRooms);
  };

  // const toggleBoxColor = (roomIndex, rowIndex, colIndex) => {
  //   setRooms((prevRooms) => {
  //     const updatedRooms = [...prevRooms];
  //     updatedRooms[roomIndex].boxes[rowIndex][colIndex].isRed = !updatedRooms[roomIndex].boxes[rowIndex][colIndex].isRed;
  //     return updatedRooms;
  //   });
  // };
  

  return (
    <>
     <div className='container'>
            <div className='row'>
      {rooms.map((room, roomIndex) => (
       
        <div key={roomIndex} className='col-lg-4 col-md-12 room-container'>
          <p>{room.name}</p>
          <div className="room">
            {room.boxes.map((row, rowIndex) => (
              <div className="row" key={rowIndex}>
                {row.map((box, colIndex) => (
                  <div
                    className={`box ${box.isRed ? 'red-box' : 'grey-box'}`}
                    key={box.id}
                    onClick={() => (      
                      toggleBoxColor(roomIndex, rowIndex, colIndex)
                      
                      )}
                  >{rowIndex+"-"+colIndex}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
       
      ))}
       </div>
        </div>
      
    </>
  );
};

export default UserRooms;
