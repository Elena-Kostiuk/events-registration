import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Events from './pages/Events/Events';
import Registration from './pages/Registration/Registration';
import Participants from './pages/Participants/Participants';
import Footer from './components/Footer';
import browserHistory from './history';

function App () {
  return (
    <Router history={browserHistory}>
      <Header />
      <Switch>
        <Route exact path='/' component={Events} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/participants' component={Participants} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
