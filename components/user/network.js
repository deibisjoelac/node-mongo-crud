const express = require('express');
const router = express.Router();
const  response = require('../../network/response')
const controller = require('./controller');
router.get('/', (req, res) => {
   const filterUsers = req.query.name || null;
   controller.all(filterUsers)
   .then(data => response.success(req, res,data))
   .catch(e => response.error(req, res,'Error ',500,e));
});
router.post('/', (req, res) => {
    controller.add(req.body.name)
    .then(result => response.success(req, res,result))
    .catch(err => response.error(req, res,'Error al guardar mensage',500,err));
});
router.patch('/:id', (req, res) => {
   controller.update(req.params.id,req.body.user)
   .then(result => response.success(req, res,result))
   .catch(err => response.error(req, res,'Error al actualizar mensage',500,err));
});

router.delete('/:id', (req, res) => {
   controller.destroy(req.params.id)
   .then(result => response.success(req, res,result))
   .catch(err => response.error(req, res,'Error al eliminar mensage',500,err));
});
 module.exports = router;