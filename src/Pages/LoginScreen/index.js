import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../Assets/loginImage.svg";
import useLoginContext from "../../Hooks/LoginScreen/useLoginContext";
import "./styles.css";

function LoginScreen() {
  const {
    loadingLogin,
    errorLogin,
    storage,
    nome,
    email,
    senha,
    setEmail,
    setSenha,
    handleUserLogin,
  } = useLoginContext();

  const navigate = useNavigate();

  function handleAuthentication() {
    if (!storage) return navigate("/");
    navigate("/Profile/" + nome);
  }

  useEffect(() => {
    handleAuthentication();
  }, [storage, nome]);

  return (
    <div className="LoginScreen">
      {loadingLogin && (
        <div className="login-backdrop">
          <div className="login-loading">
            <div className="login-loader"></div>
          </div>
        </div>
      )}
      <div className="image-container">
        <img src={loginImage} alt="imagem" />
      </div>
      <div className="login-container">
        {errorLogin && (
          <div className="error-container">
            <b>Combinação de e-mail e senha incorretos, tente novamente</b>
          </div>
        )}
        <div className="login-body">
          <div className="login-phrases">
            <b>Bem vindo</b>
            <h1>Faça o login com sua conta</h1>
          </div>
          <div className="login-inputs">
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="login-button">
            <button
              onClick={() => {
                handleUserLogin();
              }}
            >
              LOGIN
            </button>
          </div>
        </div>
        <b className="login-link-cadastro">
          Não tem cadastro? <Link to="/Register">Clique aqui!</Link>
        </b>
      </div>
    </div>
  );
}

export default LoginScreen;
