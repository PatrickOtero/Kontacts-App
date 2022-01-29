import { useContext } from "react";
import loginContext from "../../Contexts/LoginScreen";

function useLoginContext() {
  return useContext(loginContext);
}

export default useLoginContext;
