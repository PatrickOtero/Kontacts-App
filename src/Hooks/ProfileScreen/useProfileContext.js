import { useContext } from "react";
import profileContext from "../../Contexts/ProfileScreen";

function useProfileContext() {
  return useContext(profileContext);
}

export default useProfileContext;
