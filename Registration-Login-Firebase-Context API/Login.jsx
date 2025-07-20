import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Login = () => {

    const { signInUse } = useContext(AuthContext);



    const handleLogin = (e) => {
        e.preventDefault();
        //collect the data from form and validate
        //use state to set each value to each state

        //Then call with passing value the function
        // signInUser(email,password)
        // .then()
        // .catch()

    }

    return (
        <form action="" onSubmit={handleLogin}>
            //create a Login form
        </form>
    );
};

export default Login;