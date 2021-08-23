import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export const Editar = () => {
    const [usuario, setUsuario] = useState()
    const { register, handleSubmit } = useForm({
        defaultValues: { nome: usuario ? usuario.nome: "" },
    })
    const history = useHistory()

    useEffect(() => {
        setUsuario({
            nome: "foo",
            apelido: "bar",
            anoNacemento: "123"
        })        
    }, [])

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data))
    })
    return (<div className="container">
        <div className="mt-3">
            <h3>Editar usuario</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label type="text">Nome:</label>
                    <input className="form-control" ref={register} type="text" name="nome" id="nome" />
                </div>
                <div className="form-group">
                    <label type="text">Apelido:</label>
                    <input className="form-control" ref={register} type="text" name="apelido" id="apelido" />
                </div>
                <div className="form-group">
                    <label type="text">Ano de nacemento:</label>
                    <input className="form-control" ref={register} type="text" name="anoNacemento" id="anoNacemento" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Gardar
                    </button>
                </div>
            </form>
        </div>
    </div>)
}