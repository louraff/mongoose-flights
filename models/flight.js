const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
  airport: {
    type: String, 
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: Date
})

const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,
  destinations: { type: [destinationSchema], default: [] },
  tickets: [{type: Schema.Types.ObjectId, ref: 'Ticket'}],
}, {
  timestamps: true
});



module.exports = mongoose.model('Flight', flightSchema)