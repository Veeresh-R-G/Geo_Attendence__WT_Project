import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import Contri from './Contribute';
import About from './About';
import Vision from './Vision';
import Help from './Help';
import Contact from './Contact';
import Menu from './Menu';
import Atten from './Attendence';
import ErrorPage from './ErrorPage';
import Test from './Test';
import Auth from './Auth';
import Rec from './Rec';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"><Home />
            </Route>
            <Route exact path="/login"> <Login />
            </Route>
            <Route exact path="/register"> <Register />
            </Route>
            <Route exact path="/contribute"> <Contri />
            </Route>
            <Route exact path="/about"> <About />
            </Route>
            <Route exact path="/vision"> <Vision />
            </Route>
            <Route exact path="/help"> <Help />
            </Route>
            <Route exact path="/contact"> <Contact />
            </Route>
            <Route exact path="/menu"> <Menu />
            </Route>
            <Route exact path="/attendence">
              <Atten />
            </Route>
//             <Route exact path="/test">
//               <Test />
//             </Route>
            <Route exact path="/auth">
              <Auth />
            </Route>
            <Route exact path="/rec">
              <Rec />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </div>
      </div>

    </Router>
  );
}

export default App;
