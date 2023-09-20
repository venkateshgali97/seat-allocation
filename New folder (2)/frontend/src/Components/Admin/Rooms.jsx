import { useState } from 'react';

const Rooms = () => {
  const [roomDetails, setRoomDetails] = useState({
    name: '',
    rows: '',
    cols: '',
  });

  const [boxes, setBoxes] = useState([]);

  const onChangeHandler = (e) => {
    setRoomDetails({ ...roomDetails, [e.target.id]: e.target.value });
  }

  const createRoom = () => {
    const { rows, cols } = roomDetails;
    const newBoxes = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push({ id: `${i}-${j}`, is_alloted: false });
        
      }
      newBoxes.push(row);
      
    }

    setBoxes(newBoxes);
    
  }

  const toggleBoxColor = (rowIndex, colIndex) => {
    const updatedBoxes = [...boxes];
    updatedBoxes[rowIndex][colIndex].is_alloted = !updatedBoxes[rowIndex][colIndex].isRed;
    setBoxes(updatedBoxes);
  }
const RoomCreateHandler = () =>{
  const data = {
    name : roomDetails.name,
    boxes : boxes
}
const options = {
    method: "post",
    headers: {
        "Content-Type": "Application/json",
        "accept": "Application/json"
    },
    body: JSON.stringify(data)
    
}
console.log(data, "this is boxes")

fetch("http://localhost:8000/add-room", options).then((res) => res.json())
    .then((resData) => console.log(resData))
    .catch((err) => console.log(err))
}
  return (
    <>
      
          <div className="container-fluid">
            <div className='row'>
              <div className='col-lg-3 col-md-12'>
                <label htmlFor='name'>Room Name : </label>
                <input type='text' id='name' onChange={onChangeHandler} />
              </div>
              <div className='col-lg-3 col-md-12'>
                <label htmlFor='rows'>Rows : </label>
                <input type='number' id='rows' onChange={onChangeHandler} />
              </div>
              <div className='col-lg-3 col-md-12'>
                <label htmlFor='cols'>Cols : </label>
                <input type='number' id='cols' onChange={onChangeHandler} />
              </div>
              <div className='col-lg-3 col-md-12'>
                <button className='btn btn-primary' onClick={createRoom}>Create Room</button>
              </div>
            </div>
          </div>

       

      <div>
        <p>{roomDetails.name}</p>
        <div className="room">
          {boxes.map((row, rowIndex) => (
            
            <div className="row" key={rowIndex}>
              {row.map((box, colIndex) => (
                <div
                  className={`box ${box.isRed ? 'red-box' : ''}`}
                  key={box.id}
                  onClick={() => toggleBoxColor(rowIndex, colIndex)}
                ></div>
              ))}
            </div>
          ))}
        </div>
        <button className='btn btn-primary' onClick={RoomCreateHandler}>Save</button>
      </div>
    </>
  );
}

export default Rooms;
