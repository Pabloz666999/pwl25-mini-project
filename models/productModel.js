const db = require('../config/database');

// Model untuk mengambil semua produk
const findAll = () => {
  const query = 'SELECT * FROM products';
  return db.execute(query);
};

// Model untuk mengambil produk berdasarkan ID
const findById = (id) => {
  const query = `SELECT * FROM products WHERE id = ?`;
  return db.execute(query, [id]);
};

// Model untuk membuat produk baru
const create = (product) => {
  const { name, category, price, stock } = product;
  const query = `INSERT INTO products (name, category, price, stock) VALUES (?, ?, ?, ?)`;
  return db.execute(query, [name, category, price, stock]);
};

const update = (id, product) => {
  const { name, category, price, stock } = product;

  const query = `
  UPDATE products
  SET name = ?, category = ?, price = ?, stock = ? 
  WHERE id = ?`

  return db.execute(query, [name, category, price, stock, id]);
}

// Model untuk menghapus produk
const remove = (id) => {
  const query = `DELETE FROM products WHERE id = ?`;
  return db.execute(query, [id]);
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};