import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { api } from "../../services/axios"

function useLoginContextProvider() {
  const [dadosLogin, setDadosLogin] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const [storage, setStorage, removeStorage] = useLocalStorage("Token", "");

  useEffect(() => {
    function beginError() {
      setErrorLogin(false);
    }
    clearTimeout(beginError);
    setTimeout(beginError, 5000);
  }, [errorLogin]);

  const handleUserLogin = async () => {
    setLoadingLogin(true);
    //setStorage("");
    setErrorLogin(false);
    const body = {
      email,
      senha,
    };
    try {
      const response = await api.post("/login", body)

      if (response.data) {
        setNome(response.data.usuario.nome);
        setDadosLogin(response.data);
        setStorage(response.data.token);
      }

      setLoadingLogin(false);
    } catch (error) {
      setErrorLogin(true);
      console.log({ mensagem: error.response.data.message });
      setLoadingLogin(false);
    }
  };

  return {
    dadosLogin,
    nome,
    email,
    senha,
    storage,
    errorLogin,
    loadingLogin,
    setStorage,
    removeStorage,
    setEmail,
    setSenha,
    handleUserLogin,
    setLoadingLogin,
  };
}

export default useLoginContextProvider;
