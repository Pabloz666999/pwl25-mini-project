require('dotenv').config(); 
const express = require('express');
const cors = require('cors');

const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());          // Mengizinkan Cross-Origin Resource Sharing
app.use(express.json());  // Untuk parsing body JSON

app.use(logger);

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Product CRUD API' });
});

app.use('/products', productRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});