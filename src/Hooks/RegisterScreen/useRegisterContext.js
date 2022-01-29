import { useContext } from "react";
import registerContext from "../../Contexts/RegisterScreen";

function useRegisterContext() {
  return useContext(registerContext);
}

export default useRegisterContext;
