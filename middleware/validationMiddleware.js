const validateProduct = (req, res, next) => {
  const { name, price, stock } = req.body;

  // 1. Validasi tidak kosong
  if (!name || !price || !stock) {
    return res.status(400).json({ message: 'Error: Name, price, and stock are required fields.' });
  }

  // 2. Validasi tipe data (kolom angka)
  if (typeof price !== 'number' || typeof stock !== 'number') {
     return res.status(400).json({ message: 'Error: Price and stock must be numbers.' });
  }

  if (price < 0 || stock < 0) {
    return res.status(400).json({ message: 'Error: Price and stock cannot be negative.' });
  }

  // Jika lolos validasi, lanjut ke controller
  next();
};

module.exports = { validateProduct };