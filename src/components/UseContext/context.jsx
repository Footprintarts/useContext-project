import { useState, useContext, createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{ userName, setUserName, signedIn, setSignedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
