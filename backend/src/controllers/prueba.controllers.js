const PruebaCtrl = {}
const Usuario = require('../models/prueba.model')

PruebaCtrl.crear = async (req, res) => {    
    const { nome, apelido, anoNacemento } = req.body
    const NovoUsuario = new Usuario({
        nome,
        apelido,
        anoNacemento
    })
    await NovoUsuario.save()
    res.json({
        mensaje: 'Usuario gardado'
    })
}

PruebaCtrl.listar = async (req, res) => {
    Usuario.find({}).sort({ '_id': -1 }).exec((err, usuarios) => {        
        if (usuarios) {
            return res.status(200).send({
                usuarios
            })
        } else {
            return res.status(404).send({
                mensaje: 'Non hai usuarios rexistrados'
            });
        }
    })
}

PruebaCtrl.obter = async (req, res) => {
    let usuarioId = req.params._id
    Usuario.findById(usuarioId).exec((err, usuario) => {        
        if (usuario) {
            return res.status(200).send({
                usuario                  
            });
        } else {
            return res.status(404).send({
                mensaje: 'Non existe o usuario'                
            });
        }
    });
}

module.exports = PruebaCtrl