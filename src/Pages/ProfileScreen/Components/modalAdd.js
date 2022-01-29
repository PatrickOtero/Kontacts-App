import useProfileContext from "../../../Hooks/ProfileScreen/useProfileContext";
import iconeFechar from "../../../Assets/iconeFechar.svg";

function ModalAdd() {
  const {
    nome,
    email,
    telefone,
    setNome,
    setEmail,
    setModal,
    setTelefone,
    handleAddContact,
    setTableMessage,
    setEditMessage,
    setDeleteMessage,
  } = useProfileContext();
  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <img
          onClick={() => {
            setNome("");
            setEmail("");
            setTelefone("");
            setModal(false);
          }}
          src={iconeFechar}
          alt="Fechar"
        />
        <b> Novo contato </b>
        <div className="modal-inputs">
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
            type="tel"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <div className="modal-buttons">
          <button
            className="btn-add"
            onClick={() => {
              setEditMessage("");
              setDeleteMessage("");
              setTableMessage(true);
              handleAddContact();
            }}
          >
            ADICIONAR
          </button>
          <button
            className="btn-red"
            onClick={() => {
              setNome("");
              setEmail("");
              setTelefone("");
            }}
          >
            LIMPAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAdd;
