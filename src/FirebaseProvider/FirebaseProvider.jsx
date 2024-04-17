import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext=createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const FirebaseProvider = ({children}) => {

const [user,setUser]=useState(null)
console.log(user);

 const googleLogin=()=>{
    return signInWithPopup(auth, googleProvider)
 }

 const githubLogin=()=>{
    return signInWithPopup(auth, githubProvider)
 }
const createUser=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
 const signInUser=(email, password)=>{

    return signInWithEmailAndPassword(auth, email, password)
 }

useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } 
      });
},[])
const logout=()=>{
    signOut(auth)
    setUser(null)
}
    const allValues ={createUser,user,signInUser,googleLogin, logout,githubLogin  }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default FirebaseProvider;
