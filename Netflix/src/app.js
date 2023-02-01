import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();

  return (
    !user ? (
          <>
            <Router>          
              <Routes>
                <Route exact path={ROUTES.SIGN_IN} element={<Signin/>} />
                <Route exact path={ROUTES.HOME} element={<Home/>} />
                <Route exact path={ROUTES.BROWSE} element={<Signin/>} />
                <Route exact path={ROUTES.SIGN_UP} element={<Signup/>} />
              </Routes>  
            </Router>        
          </>
      ) : (
          <>
            <Router>
              <Routes>
                <Route exact path={ROUTES.BROWSE} element={<Browse/>} />
                <Route exact path={ROUTES.SIGN_IN} element={<Browse/>} />
                <Route exact path={ROUTES.SIGN_UP} element={<Browse/>} />
                <Route exact path={ROUTES.HOME} element={<Browse/>} />
              </Routes>  
            </Router>                      
          </>
        )    
  );

}
