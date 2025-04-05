const express = require('express');
const app = express();
const fs = require('fs');
const users = JSON.parse(fs.readFileSync('./db.json')).users;

app.use(express.json());

app.get('/users', (req, res) => {
  res.status(200).json(users);
});
// http://localhost:3000/users/1
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Usuario no encontrado');
  res.status(200).json(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en puerto ${PORT}`));

module.exports = app; // For testing
