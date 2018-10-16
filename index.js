const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");
const config = require('./config/database')




////// connects to mongoDB and console logs if its succsesful or not 

mongoose.connect(config.database)

mongoose.connection.on('connected', ()=>{
    console.log("connected to db " + config.database)
})

mongoose.connection.on('error', (err)=>{
    console.log("database error " + err)
})



/////////////////////////////////////////////





//// creates an express app and tells it to allow cross-origin resource sharing and use body parser 

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


///////////////////////////



////// Tells express to to use the tenants routes when a requst starts with /tenants  So I can keep my code clean 

const tenant = require('./routes/tenants')


app.use('/tenants', tenant)

////////////////////////////



////// creates a port varible
const port = process.env.PORT || 8080;
//////////////////////////////////////



/// lets express send the public folder containg the built angualr code
app.use(express.static(path.join(__dirname, 'public')));





///// tells express when to send the angular code to the client
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });


/////starts the server

app.listen(port, ()=>{
    console.log("server started on port" + port)
})
