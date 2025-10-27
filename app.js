require('dotenv').config(); // Paling atas!
const express = require('express');
const cors = require('cors');

// Import middleware dan routes
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware Bawaan
app.use(cors());          // Mengizinkan Cross-Origin Resource Sharing
app.use(express.json());  // Untuk parsing body JSON

// Middleware Kustom
app.use(logger);

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Product CRUD API' });
});

app.use('/products', productRoutes);

// Error Handling Middleware (WAJIB di paling akhir)
app.use(errorHandler);

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});