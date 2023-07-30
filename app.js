
const {Contacts} = require('./library/Contacts')
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const port = 3000;

app.get('/' , (req , res) => {
    res.send('hello World!')
})

app.post('/input' , (req,res) => {
    const { name, email, phone } = req.body;
    if (name && email && phone) {
        Contacts({ name, email, phone });
        res.send('Data Berhasil Masuk!');
      } else {
        res.status(400).send('Data tidak lengkap. Pastikan parameter memiliki properti name, email, dan phone.');
      }
})

// Endpoint untuk menampilkan data dari Contacts
app.get('/contacts', (req, res) => {
    try {
      // Membaca data dari file contacts.json
      const data = fs.readFileSync('data/contacts.json', 'utf-8');
      const contactsData = JSON.parse(data);
  
      res.json(contactsData);
    } catch (error) {
      res.status(500).send('Terjadi kesalahan dalam membaca data Contacts.');
    }
  });

app.listen(port , () => {
    console.log(`server is running on localhost:${port}`);
})