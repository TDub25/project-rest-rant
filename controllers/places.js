const router = require('express').Router()
const places = require("../models/places")

router.post('/', (req, res) => {
    console.log(req.body)
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
    places.push(req.body)
    res.redirect('/places')
})

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
});

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!places[id]) {
        res.render('error404')
    } else {
        res.render('places/show', { place: places[id], id })
    }
})

router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', { place })
    })
    .catch(err => {
        res.render('error404')
    })
})

router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

module.exports = router

//Commented out old code in case new code is inoperable
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