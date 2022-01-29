import useLoginContext from "../../../Hooks/LoginScreen/useLoginContext";
import useProfileContext from "../../../Hooks/ProfileScreen/useProfileContext";
import iconeLapis from "../../../Assets/iconeLapis.svg";
import iconeLixeira from "../../../Assets/iconeLixeira.svg";

function Table() {
  const {
    dadosContacts,
    setContatoId,
    setNome,
    setEmail,
    setTelefone,
    setModalEdit,
    handleDeleteContact,
    modalDelete,
    setModalDelete,
    nome,
    contatoId,
    email,
    telefone,
    setTableMessage,
    setAddMessage,
    setEditMessage,
  } = useProfileContext();

  const { storage } = useLoginContext();
  return (
    <div className="table">
      <div className="table-head">
        <b>Nome</b>
        <b>E-mail</b>
        <b>Telefone</b>
      </div>
      <div className="table-body">
        {storage &&
          dadosContacts !== "jwt malformed" &&
          dadosContacts.map((contact) => {
            return (
              <div key={contact.id} className="table-line">
                <div className="line-data">
                  <b className="line-nome">{contact.nome}</b>
                  <b className="line-email">{contact.email}</b>
                  <b className="line-telefone">{contact.telefone}</b>
                </div>
                <div className="line-icons">
                  <img
                    src={iconeLapis}
                    alt="Editar"
                    onClick={() => {
                      setContatoId(contact.id);
                      setNome(contact.nome);
                      setEmail(contact.email);
                      setTelefone(contact.telefone);
                      setModalEdit(true);
                    }}
                  />
                  <img
                    src={iconeLixeira}
                    alt="Apagar"
                    onClick={() => {
                      setContatoId(contact.id);
                      setNome(contact.nome);
                      setEmail(contact.email);
                      setTelefone(contact.telefone);
                      setModalDelete(true);
                    }}
                  />
                </div>
              </div>
            );
          })}
      </div>
      {modalDelete && (
        <div className="modal-backdrop">
          <div className="modal-container-delete">
            <div className="modal-container-delete-info">
              <b>Nome: {nome}</b>
              <b>E-mail: {email}</b>
              <b>Telefone: {telefone}</b>
            </div>
            <div className="modal-delete-bottom">
              <div className="modal-delete-question">
                <b>Deseja excluir este contato?</b>
              </div>
              <div className="modal-delete-inputs">
                <button
                  onClick={() => {
                    setAddMessage("");
                    setEditMessage("");
                    setModalDelete(false);
                    setTableMessage(true);
                    handleDeleteContact(contatoId);
                  }}
                >
                  Sim
                </button>
                <button
                  onClick={() => {
                    setNome("");
                    setEmail("");
                    setTelefone("");
                    setModalDelete(false);
                  }}
                >
                  Não
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
