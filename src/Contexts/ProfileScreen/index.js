import { createContext } from "react";
import useProfileContextProvider from "../../Hooks/ProfileScreen/useProfileContextProvider";

const profileContext = createContext({});

export function ContextProfileProvider(props) {
  const profileProvider = useProfileContextProvider();
  return (
    <profileContext.Provider value={profileProvider}>
      {props.children}
    </profileContext.Provider>
  );
}

export default profileContext;
