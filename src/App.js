import React, { useState, useEffect, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import {AuthContext} from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const storeUserLoggedInInformation  = localStorage.getItem('isLoggedIn');
  
//     if (storeUserLoggedInInformation === '1') {
//       setIsLoggedIn(true);
//     }

// }, [])

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
    
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home  />}
      </main>
    </React.Fragment >
  );
}

export default App;
