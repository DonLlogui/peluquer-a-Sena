const express = require('express');
const CRutas = require('../../controlador/cliente/CrearClienteControlador');
const router = express.Router();

router.post('/usuarios', CRutas.crearCliente);

module.exports = router;
