/* import express from "express";
import dbConnection from "./config/db.js";
import dotenv from 'dotenv';
import cors from 'cors';
import productRoute from "./routes/productsRoutes.js"
import collectionRoute from "./routes/collectionRoutes.js"

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(cors());
dotenv.config();
dbConnection();

app.use(express.static('public'));
app.use('/', productRoute);
app.use('/', collectionRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
 */
import express from "express";
import dbConnection from "./config/db.js";
import dotenv from 'dotenv';
import cors from 'cors';
import productRoute from "./routes/productsRoutes.js"
import collectionRoute from "./routes/collectionRoutes.js"

const app = express();

app.use(cors(
    {
        origin:`https://try-project-admin-aaynitps4-arsalans-projects-9d6fc06e.vercel.app`,
        credentials:true,
    }
))


dotenv.config();
dbConnection();

app.use(express.static('public'));
app.use('/', productRoute);
app.use('/', collectionRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});