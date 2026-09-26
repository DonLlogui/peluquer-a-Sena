const express = require('express');
const CRutas = require('../../controlador/admin/CrearClienteControlador');
const ARutas = require('../../controlador/admin/CrearAdminControlador');
const router = express.Router();

router.post('/aclientes', CRutas.crearCliente);
router.post('/admin/crear', ARutas.crearAdmin);
module.exports = router;