import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

// importing every routes
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true })); // limited images size
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); // setting up the bodyParser
app.use(cors());

// use routes
app.use('/posts', postRoutes);

// Connecting to our mongodb website

const CONNECTION_URL = 'mongodb+srv://alesito:alesito123@cluster0.fclpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// This set is not needed anymore    
//mongoose.set('userFindAndModify', false);
