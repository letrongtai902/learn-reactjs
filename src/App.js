import './App.scss';
import Footer from './components/Footer';
import { NavLink, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HeaderLinks from './components/Header/HeaderLinks';
import logo from './assets/img/logo.png';
import Loading from './components/Loading';
import { lazy, Suspense } from 'react';

const dashboardRoutes = [];
const Homelz = lazy(() => import('./features/Home/pages'));
const Bloglz = lazy(() => import('./features/Blog/pages'));
const Aboutz = lazy(() => import('./features/About/pages'));
const Contactlz = lazy(() => import('./features/Contact/pages'));

function App(props) {
  const { ...rest } = props;
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={
            <NavLink to="/">
              <img src={logo} style={{ height: '60px' }} alt="Logo UMai" />
            </NavLink>
          }
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 1,
            color: 'success',
          }}
          {...rest}
        />
        <Switch>
          <Route path="/" component={Homelz} exact />
          <Route path="/blogs" component={Bloglz} />
          <Route path="/abouts" component={Aboutz} />
          <Route path="/contacts" component={Contactlz} />
          <Route
            path="/admin"
            component={() => {
              window.location.href = 'http://umaifruits.surge.sh/';
              return null;
            }}
          />
        </Switch>
        <Footer />
      </Suspense>
    </div>
  );
}
export default App;
