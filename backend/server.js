import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import connctDB from './config/db.js';
import allRoutes from './routes/index.js';


// connect db
connctDB();

// express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api', allRoutes);

app.listen(process.env.PORT, () => {
    console.log('connected to db & listening to port', process.env.PORT);
})