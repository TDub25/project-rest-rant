const express= require('express')
const app = express()


//environment variables
require('dotenv').config()

app.use('/places',require('./controllers/places'))

//middleware set views engine
app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/places', (req,res)=>{
    res.render('places/index')
})

app.get('*',(req,res)=>{
    res.render('error404')

})

app.listen(process.env.PORT)