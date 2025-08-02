const db = require('../models/db');

exports.index = async (req, res) => {
  const [produk] = await db.query('SELECT * FROM Produk');
  const [stock] = await db.query('SELECT * FROM Stock');
  res.render('index', { produk, stock });
};
