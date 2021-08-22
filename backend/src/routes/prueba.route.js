const {Router}=require('express')
const route=Router()
const PruebaCtrl=require('../controllers/prueba.controllers')


route.get('/obter',PruebaCtrl.obter)
route.post('/crear',PruebaCtrl.crear)
route.get('/listar',PruebaCtrl.listar)
/*
route.delete('/eliminar',PruebaCtrl.eliminar)
route.put('/actualizar',PruebaCtrl.actualizar)
*/

module.exports=route
