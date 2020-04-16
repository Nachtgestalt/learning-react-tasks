import React, {Fragment, useState} from 'react';

export const NuevoProyecto = () => {
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();

    }

    const {nombre} = proyecto;

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                Nuevo proyecto
            </button>
            <form className="formulario-nuevo-proyecto">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre del proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />
                <input type="submit"
                       className="btn btn-block btn-primario"
                       value="Agregar proyecto"
                />
            </form>
        </Fragment>
    );
};
