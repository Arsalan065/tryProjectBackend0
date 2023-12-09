import express from "express";
import dbConnection from "./config/db.js";
import dotenv from 'dotenv';
import cors from 'cors';
import productRoute from "./routes/productsRoutes.js"
import collectionRoute from "./routes/collectionRoutes.js"
import bodyParser from 'body-parser';

const app = express();

app.use(cors(
    {
        origin:"https://try-project-admin.vercel.app",
        credentials:true,
        exposedHeaders: ['Content-Length', 'Apigw-Requestid', 'Access-Control-Allow-Origin'],

    }
))




dotenv.config();
dbConnection();

// Increase the payload limit to, for example, 10MB
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(express.static('public'));
app.use('/', productRoute);
app.use('/', collectionRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});