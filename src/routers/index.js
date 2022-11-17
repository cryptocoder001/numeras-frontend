import { useEffect } from 'react';
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import PrivateRoute from './privateRouter';
import ProtectedRoute from './protectedRouter';

import Header from '../components/header';
import Footer from '../components/footer';
import ScrollToTopBtn from '../components/header/ScrollToTop';

// pages
import Home from '../pages/home';
import Create from '../pages/syndicate/create';
import Create1 from '../pages/syndicate/create/1';
import Create2 from '../pages/syndicate/create/2';
import Create3 from '../pages/syndicate/create/3';
import Create4 from '../pages/syndicate/create/4';
import Create5 from '../pages/syndicate/create/5';
import Create6 from '../pages/syndicate/create/6';
import Signup from '../pages/signup';
import Signin from '../pages/signin';
import Joinsyndicate from '../pages/joinsyndicate';
import SyndicateCatalog from "../pages/joinsyndicate/catalog";
import CatalogDetail from '../pages/joinsyndicate/catalog/detail';
import ConfirmDetail from '../pages/joinsyndicate/share';
import SignAgreement from '../pages/joinsyndicate/share/signAgree';
import PersonalInfo from '../pages/joinsyndicate/share/personalInfo';
import PaymentInfo from '../pages/joinsyndicate/share/paymentInfo';
import ShareDone from '../pages/joinsyndicate/share/shareDone';

export const ScrollTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.pathname])
  return <></>
}

const Router = () => {
  return (
    <>
      <div className="">
        {/* <div className="header-space"></div> */}
        <BrowserRouter>
          <ScrollTop />
          <Header />
          <div style={{ height: '110px' }}></div>
          <Route exact path="/" component={Home} />
          <Route exact path="/create-syndicate" component={Create} />
          <Route exact path="/create-syndicate/1" component={Create1} />
          <Route exact path="/create-syndicate/2" component={Create2} />
          <Route exact path="/create-syndicate/3" component={Create3} />
          <Route exact path="/create-syndicate/4" component={Create4} />
          <Route exact path="/create-syndicate/5" component={Create5} />
          <Route exact path="/create-syndicate/6" component={Create6} />
          <ProtectedRoute exact path="/signup" component={Signup} />
          <ProtectedRoute exact path="/signin" component={Signin} />
          <Route exact path="/join-syndicate" component={Joinsyndicate} />
          <Route exact path="/syndicate/:name" component={SyndicateCatalog} />
          <Route exact path="/syndicate/:name/:id" component={CatalogDetail} />
          <Route exact path="/syndicate/share/:name/:id/1" component={ConfirmDetail} />
          <Route exact path="/syndicate/share/:name/:id/2" component={SignAgreement} />
          <Route exact path="/syndicate/share/:name/:id/3" component={PersonalInfo} />
          <Route exact path="/syndicate/share/:name/:id/4" component={PaymentInfo} />
          <Route exact path="/syndicate/share/:name/:id/5" component={ShareDone} />
          <Footer />
        </BrowserRouter>
        <ScrollToTopBtn />
      </div>
    </>
  );
};

export default Router;
