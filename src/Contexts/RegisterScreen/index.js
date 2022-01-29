import { createContext } from "react";
import useRegisterContextProvider from "../../Hooks/RegisterScreen/useRegisterContextProvider";

const registerContext = createContext({});

export function ContextRegisterProvider(props) {
  const registerProvider = useRegisterContextProvider();
  return (
    <registerContext.Provider value={registerProvider}>
      {props.children}
    </registerContext.Provider>
  );
}

export default registerContext;
