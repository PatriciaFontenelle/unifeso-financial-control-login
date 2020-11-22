import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import CadastroUsuario from './pages/cadastro/CadastroUsuario';
import Login from './pages/login/Login'

function App() {
  return (
    <Router>
      <Switch>  
        <Route path = '/' exact component={Login} />
        <Route path = '/cadastro' component={CadastroUsuario} />
      </Switch>
    </Router>
  );
}

export default App;
