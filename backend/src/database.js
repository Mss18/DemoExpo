const mongoose=require('mongoose')

URI=('mongodb://localhost/demo')

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
  .then(db=>console.log('BBDD conectada'))
  .catch(error=>console.log(error))

module.exports=mongoose