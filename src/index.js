import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import  Navigation  from './components/Navigation';
import ConsultingPage from './components/Consulting';
import ContactUsPage from './components/ContactUs';
import DesignPage from './components/Design';
import DevelopmentPage from './components/Development';
import HomePage from './components/Home';
import MarketingPage from './components/Marketing';
import SignUpPage from './components/SignUp';
import Firebase, { FirebaseContext } from './components/Firebase';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
       <Navigation />
     
       <hr/>
     <Routes>
       <Route exact path={ROUTES.CONSULTING} element={ConsultingPage}/>
       <Route path={ROUTES.CONTACT_US} element={ContactUsPage}/>
       <Route path={ROUTES.DESIGN} element={DesignPage}/>
       <Route path={ROUTES.DEVELOPMENT} element={DevelopmentPage}/>
       <Route path={ROUTES.HOME} element={HomePage}/>
       <Route path={ROUTES.MARKETING} elemnent={MarketingPage}/>
       <Route path={ROUTES.SIGN_UP} element={SignUpPage}/>
     </Routes>
   </BrowserRouter>
   </FirebaseContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
