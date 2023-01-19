const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const db = require('./models');

const app = express();


//config
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

let Port = process.env.Port || 3030;

//Router
const bookedRouter = require('./routes/Booked');
app.use('/booked',bookedRouter);

const contactRouter = require('./routes/Contacts');
app.use('/contact',contactRouter);

const userRouter = require('./routes/User');
app.use('/user',userRouter);

db.sequelize.sync().then(()=>{
    app.listen(Port, ()=>{
        console.log("running on port http://localhost:3001")
    });
});

