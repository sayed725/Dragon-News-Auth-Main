import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FireBase/firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)




    const createNewUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }


    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }



   const userLogIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    const updateUserProfile = (updatedData)=>{
       return updateProfile(auth.currentUser, updatedData)
    }









    const authInfo = {
       user, 
       setUser,
       createNewUser,
       logOut,
       userLogIn,
       loading,
       updateUserProfile
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;