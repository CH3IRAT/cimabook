const mongoose = require("mongoose");

const schema = mongoose.Schema;
const MovieSchema = new schema({
  title: {
    type: String,
    required: true,
    unique : true
  },

  img: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },

  isStream: { type: Boolean, default: false },
  
  description: {
    type: String,
  },
  rate: {
    type: Number,
  },
  genre: {
    type: String,
  },
  trailler: {
    type: String,
  },
  download : {
    type : String ,
  },
});

module.exports = mongoose.model("movie", MovieSchema);
