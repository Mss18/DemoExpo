const express=require('express')
const app=express()
const morgan=require('morgan')
const cors=require('cors')
const PORT=4000
require('./database')

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Routes
app.use('/api/',require('./routes/prueba.route'))

//Start Server
app.listen(PORT,err=>{
    if(err) return console.log(`Cannot Listen on PORT: ${PORT}`);
    console.log(`Server is Listening on: http://localhost:${PORT}/`)
})

