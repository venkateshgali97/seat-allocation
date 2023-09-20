const {DataModel} = require("../Entity/model")

const add_room = async(req,res) =>{
    let {name, boxes} = req.body
   console.log(req.body.boxes)
    const data = await DataModel.find({name})
    if(data.length === 0){
        const newData = new DataModel({name, boxes})
        await newData.save()
        return res.status(200).json("Room added successfully...")
    }
    else{
        return res.status(400).json("Room already existed..")
    }
}

module.exports = {
    add_room
}