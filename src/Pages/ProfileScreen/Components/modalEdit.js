import useProfileContext from "../../../Hooks/ProfileScreen/useProfileContext";
import iconeFechar from "../../../Assets/iconeFechar.svg";

function ModalEdit() {
  const {
    contatoId,
    nome,
    email,
    telefone,
    setNome,
    setEmail,
    setModalEdit,
    setTelefone,
    handleEditContact,
    setTableMessage,
    setAddMessage,
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
            setModalEdit(false);
          }}
          src={iconeFechar}
          alt="Fechar"
        />
        <b> Editar contato </b>
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
              setAddMessage("");
              setDeleteMessage("");
              setTableMessage(true);
              handleEditContact(contatoId);
            }}
          >
            EDITAR
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

export default ModalEdit;
