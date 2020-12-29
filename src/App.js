import './App.scss';
import Home from './features/Home/pages';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HeaderLinks from './components/Header/HeaderLinks';
import logo from './assets/img/logo.png';

const dashboardRoutes = [];

function App(props) {
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={<img src={logo} style={{ height: '70px' }} alt="LogoUMai" />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
