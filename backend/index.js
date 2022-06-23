const express = require('express');
const connettoMongo = require('./db/config');
var cors = require('cors');

connettoMongo();


const app = express();
const port = 5002;

app.use(cors());

app.use(express.json())



app.use('/api/TaskAuth', require('./Routes/TaskAuth') );

app.listen(port, ()=>{
    console.log(`app is listining on port ${port}`);
})