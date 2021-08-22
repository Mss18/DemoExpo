const express=require('express')
const app=express()
const morgan=require('morgan')
const cors=require('cors')
const PORT=4000
require('./database')

app.use(morgan('dev'))

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

//Routes
app.use('/api/',require('./routes/prueba.route'))

//Start Server
app.listen(PORT,err=>{
    if(err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server is Listening on: http://localhost:${PORT}/`)
})

