const express = require('express');
const CRutas = require('../../controlador/cliente/CrearClienteControlador');
const router = express.Router();

router.post('/usuarios/crear', CRutas.crearCliente);

module.exports = router;
