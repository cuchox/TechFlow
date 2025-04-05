const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const users = JSON.parse(fs.readFileSync('./db.json')).users;

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Usuario no encontrado');
  res.status(200).json(user);
});

module.exports = app;
