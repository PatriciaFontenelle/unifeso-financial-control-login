import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import RecuperarSenha from './pages/passwordRecovery/RecuperarSenha';
import CadastroUsuario from './pages/cadastro/CadastroUsuario';
import Login from './pages/login/Login'

function App() {
  return (
    <Router>
      <Switch>  
        <Route path = '/' exact component={Login} />
        <Route path = '/recuperar-senha' component={RecuperarSenha} />
        <Route path = '/cadastro' component={CadastroUsuario} />
      </Switch>
    </Router>
  );
}

export default App;
