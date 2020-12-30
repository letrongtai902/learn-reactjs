import './App.scss';
import Home from './features/Home/pages';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HeaderLinks from './components/Header/HeaderLinks';
import logo from './assets/img/logo.png';
import Blog from './features/Blog/pages';
import About from './features/About/pages';
import Contact from './features/Contact/pages';

const dashboardRoutes = [];

function App(props) {
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={<img src={logo} style={{ height: '70px' }} alt="Logo UMai" />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 20,
          color: 'white',
        }}
        {...rest}
      />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blogs" component={Blog} />
        <Route path="/abouts" component={About} />
        <Route path="/contacts" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
