import { useEffect, useState } from "react";

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
      const dados = await (
        await fetch("http://localhost:3001/usuarios", {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "content-type": "application/json" },
        })
      ).json();

      if (dados !== "O usuario foi cadastrado com sucesso!") {
        setDadosRegister(dados);
        setErrorRegister(true);
      }

      if (dados === "O usuario foi cadastrado com sucesso!") {
        setErrorRegister(true);
        setDadosRegister(dados);
        setNome("");
        setEmail("");
        setSenha("");
      }

      setLoadingRegister(false);
    } catch (error) {
      console.log({ mensagem: error.message });
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
