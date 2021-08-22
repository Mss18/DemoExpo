const PruebaCtrl = {}
const Usuario = require('../models/prueba.model')

PruebaCtrl.crear = async (req, res) => {
    if (err) return res.status(500).send({ message: 'Erro no servidor' })
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
        if (err) return res.status(500).send({ message: 'Erro no servidor' })
        if (usuarios) {
            return res.status(200).send({
                usuarios
            })
        } else {
            return res.status(404).send({
                message: 'Non hai usuarios rexistrados'
            });
        }
    })
}

PruebaCtrl.obter = async (req, res) => {
    let usuarioId = req.params._id
    Usuario.findById(usuarioId).exec((err, usuario) => {
        if (err) return res.status(500).send({ message: 'Erro no servidor' });
        if (usuario) {
            return res.status(200).send({
                usuario                  
            });
        } else {
            return res.status(404).send({
                message: 'Non existe o usuario'                
            });
        }
    });
}

module.exports = PruebaCtrl