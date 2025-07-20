import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ router }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //to Observe User logged in or logged out
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe(); // cleanup on unmount
        };
    }, []);


    const authInfo = { user, createUser, signInUser };
    return (
        <AuthContext.Provider>
            {router}
        </AuthContext.Provider>
    );
};

export default AuthProvider;