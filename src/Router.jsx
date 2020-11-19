import React from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router";
import App from './pages/login/App'
import RecuperarSenha from './pages/passwordRecovery/RecuperarSenha'
import CadastroUsuario from './pages/cadastro/CadastroUsuario'


class Routes extends React.Component{
    render(){
        debugger;
        return(
            <Switch>
                <Route path = '/'>
                    <App/>
                </Route>

                <Route path = '/cadastro'>
                    <CadastroUsuario/>
                </Route>

                <Route path = '/recuperarSenha'>
                    <RecuperarSenha/>
                </Route>
            </Switch>
        )
    }
}

export default Routes;