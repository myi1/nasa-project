const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

// Connerts planetsSchema with the "planet" collection
module.exports = mongoose.model("Planet", planetSchema);
