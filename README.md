Tentu, ini adalah file `README.md` yang bagus dan jelas untuk proyek Anda.

Salin dan tempel konten di bawah ini ke dalam file `README.md` di folder proyek Anda.

-----

# Admin Page - Sistem Manajemen Pembelian

Ini adalah aplikasi web sederhana yang dibangun dengan **Node.js**, **Express**, dan **EJS** untuk mengelola data produk, stok, dan riwayat pembelian. Aplikasi ini menggunakan database SQL untuk menyimpan data.

## Fitur Utama ✨

  * **Dashboard**: Menampilkan daftar produk yang tersedia dan form untuk input pembelian baru.
  * **Manajemen Pembelian**: Menampilkan seluruh riwayat pembelian, menambahkan data pembelian baru, dan membatalkan pembelian.
  * **Manajemen Stock**: Stock produk akan otomatis berkurang saat pembelian ditambahkan dan akan kembali saat pembelian dibatalkan.

-----

## Prasyarat

Sebelum memulai, pastikan Anda sudah menginstall perangkat lunak berikut:

  * [Node.js](https://nodejs.org/en/) (disarankan versi LTS)
  * [Git](https://git-scm.com/)
  * Database Server SQL (misalnya [XAMPP](https://www.apachefriends.org/index.html) untuk MariaDB/MySQL)

-----

## Panduan Instalasi dan Penggunaan

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer lokal Anda.

### 1\. Clone Repositori

Buka terminal atau Git Bash, lalu clone repositori ini ke folder pilihan Anda.

```bash
git clone https://github.com/emzedt/admin-page.git
```

### 2\. Masuk ke Direktori Proyek

```bash
cd admin-page
```

### 3\. Install Dependensi

Install semua package Node.js yang dibutuhkan oleh proyek.

```bash
npm install
```

### 4\. Setup Database

1.  Jalankan server database Anda (misalnya, nyalakan Apache dan MySQL dari XAMPP Control Panel).
2.  Buka **phpMyAdmin** (biasanya di `http://localhost/phpmyadmin`).
3.  Buat database baru dengan nama `pembelian_db`.
4.  Pilih database tersebut, lalu buka tab **SQL**.
5.  Jalankan query berikut untuk membuat semua tabel yang dibutuhkan:

<!-- end list -->

```sql
CREATE TABLE Produk (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    harga INT NOT NULL
);

CREATE TABLE Stock (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produk_id INT,
    jumlah INT NOT NULL,
    FOREIGN KEY (produk_id) REFERENCES Produk(id)
);

CREATE TABLE Pembelian (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produk_id INT,
    jumlah INT NOT NULL,
    status VARCHAR(50) DEFAULT 'SUCCESS',
    tanggal TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (produk_id) REFERENCES Produk(id)
);

-- Isi data awal untuk produk dan stock
INSERT INTO Produk (nama, harga) VALUES
('Produk A', 10000), ('Produk B', 15000), ('Produk C', 20000),
('Produk D', 25000), ('Produk E', 30000), ('Produk F', 35000),
('Produk G', 40000), ('Produk H', 45000), ('Produk I', 50000),
('Produk J', 55000);

INSERT INTO Stock (produk_id, jumlah) VALUES
(1, 100), (2, 100), (3, 100), (4, 100), (5, 100),
(6, 100), (7, 100), (8, 100), (9, 100), (10, 100);
```

### 5\. Jalankan Aplikasi

Setelah semua setup selesai, jalankan server aplikasi.

```bash
npm start
```

*(Catatan: Pastikan Anda sudah menambahkan `"start": "node app.js"` di bagian `scripts` pada file `package.json` Anda)*

### 6\. Buka di Browser

Buka browser web Anda dan akses alamat berikut:

**http://localhost:3000**

Anda sekarang bisa mulai menggunakan aplikasi admin page ini. 🎉
