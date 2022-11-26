import { useEffect, useState } from "react";
import { api } from "../../services/axios"

function useRegisterContextProvider() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dadosRegister, setDadosRegister] = useState([]);
  const [errorRegister, setErrorRegister] = useState(false);
  const [loadingRegister, setLoadingRegister] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setErrorRegister(false);
    }, 5000);
  }, [errorRegister]);

  const handleUserRegister = async () => {
    setLoadingRegister(true);
    setErrorRegister(false);
    const body = {
      nome,
      email,
      senha,
    };
    try {
      const response = await api.post("/usuarios", body)

      setDadosRegister(response.data);

      setNome("");
      setEmail("");
      setSenha("");

      setLoadingRegister(false);
    } catch (error) {
      setErrorRegister(true);
      setDadosRegister(error.response.data);
      setLoadingRegister(false);
    }
  };

  return {
    nome,
    email,
    senha,
    setNome,
    setEmail,
    setSenha,
    dadosRegister,
    errorRegister,
    loadingRegister,
    handleUserRegister,
  };
}

export default useRegisterContextProvider;
