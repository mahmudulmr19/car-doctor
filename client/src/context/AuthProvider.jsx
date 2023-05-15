import React, { useState } from "react";

export const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
