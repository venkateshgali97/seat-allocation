const mongoose = require('mongoose');

// Define a schema for a box
const boxSchema = new mongoose.Schema({
  id: String,
  is_alloted: Boolean,
});

// Define a schema for the main data
const dataSchema = new mongoose.Schema({
  name: String,
  boxes: [[boxSchema]]
});

// Create a Mongoose model using the schema
const DataModel = mongoose.model('Data', dataSchema);

module.exports ={
  DataModel
};





// const mongoose = require('mongoose');

// // Define a schema for the inner box object
// const innerBoxSchema = new mongoose.Schema({
//   id: String,
//   is_alloted: Boolean,
// });

// // Define a schema for the outer box object
// const outerBoxSchema = new mongoose.Schema({
//   id: String,
//   is_alloted: Boolean,
//   innerBoxes: [innerBoxSchema], // Array of inner boxes
// });

// // Define the main schema for the JSON data
// const dataSchema = new mongoose.Schema({
//   name: String,
//   boxes: [outerBoxSchema], // Array of outer boxes
// });

// // Create a Mongoose model using the schema
// const DataModel = mongoose.model('Data', dataSchema);

// module.exports = {
//   DataModel
// }




// const mongoose = require('mongoose');

// const boxSchema = new mongoose.Schema({
//   id: String,
//   is_alloted: Boolean,
// });

// const dataSchema = new mongoose.Schema({
//   name: String,
//   boxes: [boxSchema],
// });

// const DataModel = mongoose.model('Data', dataSchema);

// module.exports = {
//     DataModel};



// const mongoose = require('mongoose');

// const boxSchema = new mongoose.Schema({
//   id: String,
//   is_alloted: Boolean,
// });

// const nameSchema = new mongoose.Schema({
//   name: String,
//   boxes: [boxSchema],
// });

// const NameModel = mongoose.model('Name', nameSchema);

// module.exports ={
//     NameModel
// };



// const mongoose = require('mongoose');

// // Define the box schema
// const boxSchema = new mongoose.Schema({
//   id: String,
//   isRed: Boolean,
// });

// // Define the name schema
// const nameSchema = new mongoose.Schema({
//   name: String,
//   boxes: [boxSchema],
// });

// // Define the main schema
// const mainSchema = new mongoose.Schema({
//   boxes: [boxSchema],
//   name: String,
// });

// // Create models
// const Box = mongoose.model('Box', boxSchema);
// const Name = mongoose.model('Name', nameSchema);
// const Main = mongoose.model('Main', mainSchema);

// module.exports = { Box, Name, Main };
