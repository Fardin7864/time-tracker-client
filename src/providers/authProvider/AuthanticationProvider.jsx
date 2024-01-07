import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {auth} from '../../firebase/firebase'

export const AuthContext = createContext();

const AuthanticationProvider = ({children}) => {
    
    // states
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    // auth provider
    const google = new GoogleAuthProvider();

    // create user with email
    const creatUres =(emial, password) => { 
        setLoading(true)
        return createUserWithEmailAndPassword(auth, emial, password)
     }

    // Login with email and pass
    const login = (email, password) => { 
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Social login
    const socilaLogin = (provider) => { 
        setLoading(true)
        return signInWithPopup(auth, provider)
     }

    // toasts
    const successToast = (message) => { 
        toast.success(`${message}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
     }
    const errorToast = (message) => { 
        toast.error(`${message}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
     }

      //  sign out
    const logOut = () => { 
        setLoading(true)
        signOut(auth)
        successToast('Successfully sign out!')
     }

    
    useEffect(() => { 
        const unsebscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(true)
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unsebscribe();
        }
     },[])


    //  context info
     const authInfo = {
        user,
        signOut,
        google,
        creatUres,
        login,
        socilaLogin,
        logOut,
        isLoading,
        successToast,
        errorToast
     }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthanticationProvider;