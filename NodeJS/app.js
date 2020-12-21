const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/usrmgt",{useNewUrlParser: true,useUnifiedTopology: true})
mongoose.connection
  .once('open',()=>console.log('connected to MongoDB'))
  .on('error',()=> {
    console.log("error",error);
  });

module.exports = mongoose;