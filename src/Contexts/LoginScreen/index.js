import { createContext } from "react";
import useLoginContextProvider from "../../Hooks/LoginScreen/useLoginContextProvider";

const loginContext = createContext({});

export function ContextLoginProvider(props) {
  const loginProvider = useLoginContextProvider();
  return (
    <loginContext.Provider value={loginProvider}>
      {props.children}
    </loginContext.Provider>
  );
}

export default loginContext;
