import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
}); 

const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storeUserLoggedInInformation  = localStorage.getItem('isLoggedIn');
      
        if (storeUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
    
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true);
    }

    return (
        <AuthContext.Provider 
            value={{
                isLoggedIn: isLoggedIn,
                onLogin: loginHandler,
                onLogout: logoutHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;