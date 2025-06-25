import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)

  // createUser function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // singIn function
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sing Out function
  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // google Sing In
  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // update user
  const updateUser = (updatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData)
  }

  const sendPasswordReset = (email) => {
    setLoading(true)
return sendPasswordResetEmail(auth, email)
}
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);
  
  const value = {
    loading,
    user,
    createUser,
    loginUser,
    userSignOut,
    singInWithGoogle,
    setLoading,
    updateUser,
    setUser,
   sendPasswordReset,
  };
  return (
    <>
      <AuthContext value={value}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
