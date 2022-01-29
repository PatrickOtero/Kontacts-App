import { Link, useNavigate } from "react-router-dom";
import registerImage from "../../Assets/registerImage.svg";
import useRegisterContext from "../../Hooks/RegisterScreen/useRegisterContext";
//import { useNavigate } from "react-router-dom";
import "./styles.css";

//const navigate = useNavigate();
function RegisterScreen() {
  const navigate = useNavigate();
  const {
    dadosRegister,
    loadingRegister,
    errorRegister,
    nome,
    email,
    senha,
    setNome,
    setEmail,
    setSenha,
    handleUserRegister,
  } = useRegisterContext();

  return (
    <div className="RegisterScreen">
      {loadingRegister && (
        <div className="register-backdrop">
          <div className="register-loading">
            <div className="register-loader"></div>
          </div>
        </div>
      )}
      <div className="register-container">
        {errorRegister && (
          <div className="register-error-container">
            <b>{dadosRegister}</b>
          </div>
        )}
        <div className="register-body">
          <div className="register-phrases">
            <h1>Cadastre-se</h1>
          </div>
          <div className="register-inputs">
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="email"
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
          <div className="register-button">
            <button className="btn-green" onClick={() => handleUserRegister()}>
              CADASTRAR
            </button>
            <button className="btn-red" onClick={() => navigate("/")}>
              CANCELAR
            </button>
          </div>
        </div>
        <b className="register-link-cadastro">Já tem cadastro?</b>
        <Link to="/">Clique aqui!</Link>
      </div>
      <div className="register-image-container">
        <img src={registerImage} alt="imagem" />
      </div>
    </div>
  );
}

export default RegisterScreen;
