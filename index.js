const express= require('express')
const bodyParser= require('body-parser')

const app = express()
require('dotenv').config()
const methodOverride= require('method-override')

//middleware
app.set("views", __dirname + "/views");
app.set('view engine','jsx')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use('/places',require('./controllers/places'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('*',(req,res)=>{
    res.render('error404')
})

app.listen(process.env.PORT)