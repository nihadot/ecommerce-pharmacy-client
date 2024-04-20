import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Adminlayout from '../admin layout/Adminlayout';

function Protected() {
    const [tokenState, setTokenState] = useState(false);

    const [user, setUser] = useState(null);

 
  
    useEffect(() => {
        // Check token here (retrieve from local storage or elsewhere)
        const token = localStorage.getItem('token') ? true : false;

        setTokenState(token);
        const fetchUser = () => {
            const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
            setUser(userFromLocalStorage);
        };
        
        fetchUser();

       
    }, [user]); // Empty dependency array for one-time check

    console.log(tokenState, 'tokenstate outside useEffect');

    if (user === null) {
        // User data is still being fetched, so return a loading indicator or null
        return null;
    }


    return (
        <div>
            {user.isLogged ? <Adminlayout /> : <Navigate to="/alogin" replace={true} />}
        </div>
    );
}

export default Protected;
