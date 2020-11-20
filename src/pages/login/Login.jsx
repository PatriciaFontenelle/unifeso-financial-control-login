import React from 'react';
import './Login.css'
import logo from "../../logo.svg";
import { Link } from 'react-router-dom';


class Login extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="container__login">
                    <img class="logo" src={logo} alt="Logo" />
                    
                    <input class="input" type="email" placeholder="Email" />
                    <input class="input" type="password" placeholder="Senha" />

                    <button class="button button--success" type="submit">
                        Entrar
                    </button>

                    <Link class="link" to="/recuperar-senha">
                        Esqueceu sua senha?
                    </Link>

                    <Link class="link" to="/cadastro">
                        Deseja se cadastrar?
                    </Link>
                </div>
            </div>
        );
    }
}

export default Login;