const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const socialRoutes = require('./routes/socialRoutes');
app.use('/api/social', socialRoutes);

// Servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
