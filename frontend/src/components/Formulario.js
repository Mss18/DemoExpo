import Axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'


export const Formulario = () => {

    const [nome, setNome] = useState('')
    const [apelido, setApelido] = useState('')
    const [anoNacemento, setAnoNacemento] = useState('')

    const registrar = async (e) => {
        e.preventDefault()
        const NovoUsuario = { nome, apelido, anoNacemento }
        const respuesta = await Axios.post('http://localhost:4000/api/crear', NovoUsuario)
        const mensaje=respuesta.data.mensaje
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario gardado',
            showConfirmButton: true           
          })       
    }

    return (        
        <div className="container col-md-4 mt-4">            
            <form onSubmit={registrar}>
            <h1>Formulario de rexistro <span className="badge bg-secondary">;)</span></h1><br />
                <div className="form-group">
                    <input type="text" className="form-control" required placeholder="Nome" onChange={e => setNome(e.target.value)} />
                </div><br />
                <div className="form-group">
                    <input type="text" className="form-control" required placeholder="Apelido" onChange={e => setApelido(e.target.value)} />
                </div><br />
                <div className="form-group">
                    <input type="number" className="form-control" required placeholder="Ano de Nacemento" onChange={e => setAnoNacemento(e.target.value)} />
                </div><br />
                <button type="submit" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Preme este botón para gardar os teus datos">
                    Gardar
                </button>
            </form>
        </div>
    )
}


