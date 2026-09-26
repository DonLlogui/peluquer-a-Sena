const express = require('express');
const CRutas = require('../../controlador/admin/CrearClienteControlador');
const ARutas = require('../../controlador/admin/CrearAdminControlador');
const TRutas = require('../../controlador/admin/CrearTrabajadorControlador');
const router = express.Router();

router.post('/seguridad/crearcliente', CRutas.crearCliente);
router.post('/seguridad/crear', ARutas.crearAdmin);
router.post('/seguridad/crearcliente', TRutas.crearTrabajador);
module.exports = router;