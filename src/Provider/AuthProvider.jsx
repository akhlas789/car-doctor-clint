/* eslint-disable react/prop-types */
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContex = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const authInfo = {
        
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;