import { Dispatch, SetStateAction, createContext } from "react";

export type AuthContextType = {
  authType: "login" | "signup";
  setAuthType: Dispatch<SetStateAction<"login" | "signup">>;
  hasBeenRegistered: boolean;
  setHasBeenRegistered: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType>({
  authType: "login",
  setAuthType: () => {},
  hasBeenRegistered: false,
  setHasBeenRegistered: () => {},
});
