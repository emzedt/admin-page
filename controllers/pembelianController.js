const db = require('../models/db');

exports.list = async (req, res) => {
  const [rows] = await db.query('SELECT p.*, pr.nama FROM Pembelian p JOIN Produk pr ON p.produk_id=pr.id');
      const [produk] = await db.query('SELECT * FROM Produk');
  res.render('pembelian', { pembelian: rows, produk: produk });
};

exports.add = async (req, res) => {
  const { produk_id, jumlah } = req.body;
  await db.query('INSERT INTO Pembelian (produk_id, jumlah) VALUES (?, ?)', [produk_id, jumlah]);
  await db.query('UPDATE Stock SET jumlah = jumlah - ? WHERE produk_id = ?', [jumlah, produk_id]);
  res.redirect('/pembelian');
};

exports.cancel = async (req, res) => {
   const id = req.params.id;
  const [pembelian] = await db.query('SELECT * FROM Pembelian WHERE id = ?', [id]);
    
    if (pembelian.length === 0) {
      throw new Error("Pembelian tidak ditemukan.");
    }

    const item = pembelian[0];

    // 2. Kembalikan stok ke tabel Stok
    await db.query('UPDATE Stock SET jumlah = jumlah + ? WHERE produk_id = ?', [item.jumlah, item.produk_id]);
    
    // 3. Ubah status di tabel Pembelian menjadi CANCELLED
    await db.query('UPDATE Pembelian SET status="CANCELLED" WHERE id=?', [id]);
  res.redirect('/pembelian');
};
