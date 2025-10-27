# Mini Project UTS - CRUD REST API (Express.js + MySQL)

Ini adalah implementasi REST API CRUD sederhana untuk mengelola data **Produk**, sebagai bagian dari Mini Project UTS.

## Fitur

-   **Framework:** Express.js
-   **Database:** MySQL (menggunakan `mysql2/promise`)
-   **Struktur:** Model-View-Controller (MVC)
-   **Fitur Tambahan:**
    -   Konfigurasi menggunakan `.env`.
    -   Middleware untuk *logging*, validasi input, dan *error handling*.

## Struktur Folder

uts-crud-api/ ├── config/ # Koneksi database ├── controllers/ # Logika bisnis (CRUD) ├── middleware/ # Logger, Validator, ErrorHandler ├── models/ # Query database ├── routes/ # Endpoint API ├── screenshots/ # Hasil uji Postman ├── .env # File konfigurasi ├── app.js # Server utama ├── database.sql # Setup tabel SQL └── README.md

## Setup & Instalasi

1.  **Clone repository**
    ```bash
    git clone [URL_GITHUB_ANDA]
    cd uts-crud-api
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Setup Database**
    -   Buat database di MySQL (misal: `uts_product_api`).
    -   Import atau jalankan query dari file `database.sql` untuk membuat tabel `products`.

4.  **Konfigurasi `.env`**
    -   Buat file `.env` di root folder.
    -   Salin isi dari `.env.example` (atau dari contoh di bawah) dan sesuaikan dengan konfigurasi MySQL Anda.
        ```env
        PORT=3000
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=password_anda
        DB_NAME=uts_product_api
        ```

5.  **Jalankan Server**
    ```bash
    npm run dev
    # Server akan berjalan di http://localhost:3000
    ```

## Endpoints API (Ujicoba Postman)

Base URL: `http://localhost:3000`

| Method | Endpoint | Deskripsi | Contoh Body (JSON) |
| :--- | :--- | :--- | :--- |
| `GET` | `/products` | Mengambil semua produk. | - |
| `GET` | `/products/1` | Mengambil produk dengan ID 1. | - |
| `POST` | `/products` | Membuat produk baru. | `{"name": "Kopi", "category": "Drinks", "price": 5.00, "stock": 100}` |
| `PUT` | `/products/1` | Memperbarui produk ID 1. | `{"name": "Kopi Hitam", "category": "Drinks", "price": 5.50, "stock": 90}` |
| `DELETE` | `/products/1` | Menghapus produk ID 1. | - |

## Screenshot Ujicoba Postman

*(**Catatan:** Anda harus mengganti bagian ini dengan screenshot Anda sendiri)*

### 1. GET /products (Get All)
(Tempel screenshot Postman Anda di sini)

### 2. GET /products/:id (Get By ID)
(Tempel screenshot Postman Anda di sini)

### 3. POST /products (Create)
(Tempel screenshot Postman Anda di sini)

### 4. PUT /products/:id (Update)
(Tempel screenshot Postman Anda di sini)

### 5. DELETE /products/:id (Delete)
(Tempel screenshot Postman Anda di sini)

### 6. Uji Validasi (Input Kosong)
(Tempel screenshot Postman Anda untuk error 400 di sini)