import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   console.log(loading, user);

  // ✅ Create user function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Google sign in function
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ✅ Sign in function (optional)
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // updateUser should return the Promise from updateProfile so callers can chain .then()
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // ✅ Sign out function (optional)
  const logOut = () => {
    return signOut(auth);
    
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const resetPassword = (email) => sendPasswordResetEmail(auth, email); // 👈 forgot password function


  // ✅ Provide createUser in context
  const authData = {
    user,
    setUser,
    createUser,
    googleLogin,
    signIn,
    logOut,
    resetPassword,
    loading,
    setLoading,
    updateUser,
  };

  // Use the Provider component so consumers receive the authData object
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
