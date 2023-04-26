import bodyParser from "body-parser";
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
/* ************************************************************* */
import usersRoute from './routes/usersRoute.js';
// import messagesRoute from './routes/messagesRoute.js';
import chatsRoute from './routes/chatsRoute.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extenteded: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* ************************************************************* */
app.get('/', (req, res) => {
    res.send("faya chat rx-app API");
});

app.use('/users', usersRoute);
// app.use('/messages', messagesRoute);
app.use('/chats', chatsRoute);

const PORT = process.env.PORT || 3000;

// const DB_CONNECTION_URI = 'mongodb://localhost/faya_chat_app';
// mongoose.connect(DB_CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`succesfull connection to db PORT ${PORT} ....`)))
//     .catch(err => console.log(err + '\nunable to connect'));

// mongodb + srv://admin:<password>@<yourClouster>/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(process.env.DB_CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true, writeConcern: { w: 'majority', j: true, wtimeout: 3000 } })
    .then(() => app.listen(PORT, () => console.log(`succesfull connection to db, server is on PORT ${PORT} ....`)))
    .catch(err => console.log(err + '\nunable to connect'));


    // const { MongoClient, ServerApiVersion } = require('mongodb');
    // const uri = "mongodb+srv://firalammii:<password>@cluster0.kxkeslq.mongodb.net/?retryWrites=true&w=majority";
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    // client.connect(err => {
    //     const collection = client.db("test").collection("devices");
    //     // perform actions on the collection object
    //     client.close();
    // });