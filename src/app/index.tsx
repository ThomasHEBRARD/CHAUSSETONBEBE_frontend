import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Shop = lazy(() => import('../pages/shop'));
const Menu = lazy(() => import('../app/Menu'));
const HomePage = lazy(() => import('../app/Menu/homepage'));
const Footer = lazy(() => import('../app/Footer'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<></>}>
                <Route path="" render={() => <Menu />} />
                <Route exact path="/homepage" render={() => <HomePage />} />
                <Route exact path="/shop" render={() => <Shop />} />
                <Route path="" render={() => <Footer />} />
            </Suspense>
        </Router>
    );
};
export default hot(App);
