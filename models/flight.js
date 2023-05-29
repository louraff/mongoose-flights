const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,
}, {
  timestamps: true
});

const destinationSchema = new Schema ({
  airport: {
    type: String, 
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: {
    type: Number,
    default: function() {
      return new Date().getFullYear();
    },
  }
})

module.exports = mongoose.model('Flight', flightSchema)