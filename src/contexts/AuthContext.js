import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signup(email, password) {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      return err;
    }
  }

  async function login(email, password) {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      return err;
    }
  }

  function logout() {
    return auth.signOut();
  }

  async function updatePassword(password) {
    try {
      await currentUser.updatePassword(password);
    } catch (err) {
      return err;
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { useAuth };
export default AuthProvider;
