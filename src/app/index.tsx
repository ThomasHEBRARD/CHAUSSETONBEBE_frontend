import React, { lazy, Suspense } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Shop = lazy(() => import("../pages/shop"));
const Menu = lazy(() => import("../app/Menu"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<></>}>
        <Route exact path="" render={() => <Menu />} />
        <Route exact path="/shop" render={() => <Shop />} />
      </Suspense>
    </Router>
  );
};
export default hot(App);
