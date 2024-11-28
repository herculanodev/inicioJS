
const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
  res.send('Servidor rodando com Express!');
});

// Rota exemplo para testes
app.post('/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Dados recebidos com sucesso!', data });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
