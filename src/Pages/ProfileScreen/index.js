import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import iconeSair from "../../Assets/iconeSair.svg";
import useLoginContext from "../../Hooks/LoginScreen/useLoginContext";
import useProfileContext from "../../Hooks/ProfileScreen/useProfileContext";
import ModalAdd from "./Components/modalAdd";
import ModalEdit from "./Components/modalEdit";
import Table from "./Components/table";
import "./main.css";
import "./modals.css";
import "./table.css";

function ProfileScreen() {
  const {
    modal,
    modalEdit,
    setModal,
    handleListContacts,
    addMessage,
    editMessage,
    deleteMessage,
    tableMessage,
    setTableMessage,
    updateList,
  } = useProfileContext();
  const { removeStorage, loadingLogin } = useLoginContext();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadContacts() {
      await handleListContacts();
    }

    loadContacts();
  }, [updateList]);

  useEffect(() => {
    setTimeout(() => {
      setTableMessage(false);
    }, 5000);
  }, [deleteMessage, addMessage, editMessage]);

  return (
    <div className="ProfileScreen">
      {loadingLogin && (
        <div className="login-backdrop">
          <div className="login-loading">
            <div className="login-loader"></div>
          </div>
        </div>
      )}
      {modal && <ModalAdd />}
      {modalEdit && <ModalEdit />}

      <header>
        <b>Kontacts</b>
        <img
          src={iconeSair}
          alt="Deslogar"
          onClick={() => {
            removeStorage();
            navigate("/");
          }}
        ></img>
      </header>
      {tableMessage && (
        <div className="table-error-container">
          <b>{deleteMessage || addMessage || editMessage}</b>
        </div>
      )}
      <div className="profile-body">
        <button onClick={() => setModal(true)}>Adicionar</button>
        <Table />
      </div>
    </div>
  );
}

export default ProfileScreen;
