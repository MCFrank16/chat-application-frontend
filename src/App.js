import './styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginContainer from './components/Login-container';
import RegisterContainer from './components/register-container';
import ChatBox from './components/chat-box';
import useToken from './components/useToken';

function App() {
  const { token } = useToken();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={!token ? LoginContainer : ChatBox } />
          <Route path ='/register' exact component={!token ? RegisterContainer : ChatBox} />
          <Route path="/chat" exact component={!token ? LoginContainer : ChatBox} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
