/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContex = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader (true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser =(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser)
            setLoader (false)
        })
        return()=>{
            return(unsubcribe)
        }
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        singInUser,

    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;