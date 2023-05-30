const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index, 
    new: newFlight, 
    create, 
    show, 
    edit, 
    update
}

async function update(req, res, next) {
  try {

  } catch(err) {
    
  }
}

async function edit(req, res, next) {
  try{
    const {id} = req.params
    const flight = await Flight.findById(id)
    res.render('flights/edit', {
      title: 'Edit Flight Details',
      flight, 
      errorMsg: ""
    })
  } catch(err) {
    console.log(err)
    next()
  }
}

async function show(req, res, next) {
  try{
  const {id} = req.params
  const flight = await Flight.findById(id)

  const tickets = await Ticket.find({flight: flight._id})

  for(const key in flight.toObject()){
    console.log(`${key[0].toUpperCase() + key.substring(1)}: ${flight[key]}`)
  }

  res.render('flights/show', {
    flight: flight.toObject(),
    tickets, 
    title: 'Flight Details'
  })
} catch(err) {
  console.log(err)
  next()
}
}

async function index(req, res, next) {
    const allFlights = await Flight.find({});
    res.render('flights/index', {title: 'All Flights', allFlights: allFlights});
}

function newFlight(req, res) {
    res.render('flights/new', {errorMsg: ''})
}

async function create(req, res) {
    
    try {
  //     req.body.date = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  // flight.create(req.body)
    await Flight.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect('/flights');  // Update this line
  } catch (err) {
    // Typically some sort of validation error
    res.render('flights/new', { errorMsg: err.message });
  }
  }

