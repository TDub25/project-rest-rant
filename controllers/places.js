const router = require('express').Router()
const e = require('express')
const places = require('../models/places.js')
const db = require('../models')

//Commented out lines 6 through 71 in case new code is inoperable
/* router.get('/',(req,res)=>{
  res.render('places/index',{places})
}) 
//View
router.get('/new', (req,res)=>{
  res.render('places/new')
}) 
router.get('/:id', (req,res)=>{
  let id = Number(req.params.id)
  if(isNaN(id)){
    res.render('error404')
  }
  else if (!places[id]){
    res.render('error404')
  }
  else {
  res.render('places/show',{place: places[id],id} )
  }
})  
//New
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  req.body.key = places.length+1
  places.push(req.body)
  res.redirect('/places')
})
//Edit
router.get('/:id/edit', (req, res) => {
let id = Number(req.params.id)
if (isNaN(id)) {
    res.render('error404')
}
else if (!places[id]) {
    res.render('error404')
}
else {
  res.render('places/edit', { place: places[id], id })
}
})

//Delete
router.delete('/:id', (req, res) => {
let id = Number(req.params.id)
if (isNaN(id)) {
  res.render('error404')
}
else if (!places[id]) {
  res.render('error404')
}
else {
  places.splice(id,1)
  res.redirect('/places')
}
})

module.exports = router */

router.get('/', (req, res) => {
  db.Place.find()
  .then((places)=>{
    res.render('places/index',{places})
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  if(!req.body.pic){
    req.body.pic="../images/NoImageFound.png"
  }
  db.Place.create(req.body)
  .then(()=>{
    res.redirect('/places')
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  })
})
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place =>{
    res.render('places/show',{place})
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  })
})

router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place =>{
     res.render('places/edit',{place})
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id,req.body)
  .then(place =>{  
      console.log(`We have Updated the info for ${req.body.name}`)
      res.redirect(`/places/${req.params.id}`)  
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  }
    )
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place=>{
    console.log(`The record for ${req.params.id} has been deleted`)
    res.redirect('/places')
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  })
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router