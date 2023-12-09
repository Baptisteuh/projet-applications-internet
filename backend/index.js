import express from 'express'
import sqlite3 from 'sqlite3'
import cors from 'cors';

const app = express()

app.use(cors());

const db = new sqlite3.Database('zeldam.db');

app.get('/', function(request, response) {
  response.send("Welcome to Zeldam API!")
})

app.get('/api', function (request, response) {
  db.all('SELECT * FROM items', (err, rows) => {
    if (err) {
      response.status(500).json({ error: err.message });
      return;
    }
    response.json(rows);
  });
})

app.get('/api/:id', function (request, response) {
  db.get('SELECT * FROM items WHERE id=' + request.params.id, (err, row) => {
    if (err) {
      response.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      response.status(404).json({ message: 'Objet non trouvé' });
      return;
    }
    response.json(row);
  });
})

app.listen(3000, function () {
  console.log("Server listening on port 3000")
})
