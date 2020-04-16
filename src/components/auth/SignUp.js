import React, {useState}from 'react';
import {Link} from "react-router-dom";


export const SignUp = () => {

    const [usuario, guardarUsuario] = useState({
        username: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const {username, email, password, confirmar} = usuario;

    const inputChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        // Validations

        // Password minimo 6 caracteres

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener cuenta</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="username">Nombre de usuario</label>
                        <input type="text" id="username"
                               name="username"
                               value={username}
                               placeholder="Tu username"
                               onChange={inputChange}
                        />
                    </div>
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
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"
                               name="password"
                               value={password}
                               placeholder="Tu password"
                               onChange={inputChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input type="password" id="confirmar"
                               name="confirmar"
                               value={confirmar}
                               placeholder="Repite password"
                               onChange={inputChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-block btn-primario"
                               value="Registrarme"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">Iniciar sesión</Link>
            </div>
        </div>
    );
};
