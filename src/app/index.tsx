import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Shop = lazy(() => import('../pages/shop'));
const Menu = lazy(() => import('../app/Menu'));
const HomePage = lazy(() => import('../app/Menu/homepage'));
const Footer = lazy(() => import('../app/Footer'));

const App = () => {
    return (
        <div
            style={{
                backgroundColor: '#fffcf7',
                margin: '-8px -8px 0 -8px',
            }}
        >
            <Router>
                <Suspense fallback={<></>}>
                    <Route path="" render={() => <Menu />} />
                    <div style={{ paddingTop: '58px' }}>
                        <Route exact path="/homepage" render={() => <HomePage />} />
                        <Route exact path="/shop" render={() => <Shop />} />
                        <Route path="" render={() => <Footer />} />
                    </div>
                </Suspense>
            </Router>
        </div>
    );
};
export default hot(App);
