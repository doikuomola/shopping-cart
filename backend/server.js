const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes.js')

dotenv.config();

connectDB()


app.use(express.json());

app.use('/api/products', productRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))