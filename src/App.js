import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import About from './components/About/About';
import Teachers from './components/Teachers/Teachers';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        {/* site header  */}
        <Header></Header>
        <Switch>
          {/* default route  */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* home page  */}
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* about page  */}
          <Route path="/about">
            <About></About>
          </Route>
          {/* services page  */}
          <Route path="/services">
            <Services></Services>
          </Route>
          {/* teachers page  */}
          <Route path="/teachers">
            <Teachers></Teachers>
          </Route>
          {/* notfound page  */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
