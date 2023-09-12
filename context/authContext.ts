import { Dispatch, SetStateAction, createContext } from "react";

  export type AuthContextType = {
        authType: "login" | "signup";
        setAuthType: Dispatch<SetStateAction<"login" | "signup">>;
    };
  
  export const AuthContext = createContext<AuthContextType>({
    authType: "login",
    setAuthType: () => {},
  });