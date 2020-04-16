import React, {useState}from 'react';
import {Link} from "react-router-dom";


export const Login = () => {

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    const {email, password} = usuario;

    const inputChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        // Validations

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"
                               name="email"
                               value={email}
                               placeholder="Tu email"
                               onChange={inputChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Password</label>
                        <input type="password" id="password"
                               name="password"
                               value={password}
                               placeholder="Tu password"
                               onChange={inputChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-block btn-primario"
                               value="Iniciar sesión"
                        />
                    </div>
                </form>
                <Link to={'/signup'} className="enlace-cuenta">Obtener cuenta</Link>
            </div>
        </div>
    );
};
