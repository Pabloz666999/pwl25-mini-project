-- Buat database baru (jika belum ada)
CREATE DATABASE IF NOT EXISTS uts_product_api;

-- Gunakan database tersebut
USE uts_product_api;

-- Buat tabel products
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- (Opsional) Masukkan beberapa data awal
INSERT INTO products (name, category, price, stock) VALUES
('Laptop Pro', 'Electronics', 1500.00, 50),
('Mouse Gaming', 'Electronics', 75.50, 200),
('Buku Node.js', 'Books', 25.00, 150);