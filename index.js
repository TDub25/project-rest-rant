require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const app = express()

//Express Settings
app.use(methodOverride('_method'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//Controllers Route 
app.use('/places', require('./controllers/places'))

//Homepage Route
app.get('/', (req, res) =>{
    res.render('home')
})

//Wildcard Route
app.get('*', (req,res) =>{
    res.status(404).render('error404')
})

app.listen(process.env.PORT)