import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ROUTES_DATA } from './config/routes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Switch>
          {ROUTES_DATA.map(({ path, ...prop }, i) => (
            <Route
              key={i}
              exact
              path={path === '/triangles' ? `${path}/:step` : path}
              {...prop}
            />
          ))}
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
