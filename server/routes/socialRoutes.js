const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API de redes sociales'
  });
});

module.exports = router;
