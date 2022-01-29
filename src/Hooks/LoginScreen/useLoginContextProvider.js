import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

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
      const dados = await (
        await fetch("https://kontacts-api-test.herokuapp.com/login", {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "content-type": "application/json" },
        })
      ).json();

      if (dados) {
        setNome(dados.usuario.nome);
        setDadosLogin(dados);
        setStorage(dados.token);
        console.log(dados);
      }

      setLoadingLogin(false);
    } catch (error) {
      setErrorLogin(true);
      console.log({ mensagem: error.message });
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
