import { useState } from "react";
import useLoginContext from "../../Hooks/LoginScreen/useLoginContext";
import { apiAuth } from "../../services/axios"

function useProfileContextProvider() {
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [contatoId, setContatoId] = useState();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dadosContacts, setDadosContacts] = useState([]);
  const [addMessage, setAddMessage] = useState("");
  const [editMessage, setEditMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [tableMessage, setTableMessage] = useState(false);
  const [updateList, setUpdateList] = useState(false);

  const { setLoadingLogin } = useLoginContext();

  const handleListContacts = async () => {
    setLoadingLogin(true);
    try {
      const response = await apiAuth.get("/contatos")

      if (response.data) {
        setDadosContacts(response.data);
      }
      setLoadingLogin(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddContact = async () => {
    setLoadingLogin(true);
    const body = {
      nome,
      email,
      telefone,
    };

    try {
      const response = await apiAuth.post("/contatos", body)

      setAddMessage(response.data);
      setNome("");
      setEmail("");
      setTelefone("");

      setUpdateList(!updateList);
      setLoadingLogin(false);
    } catch (error) {
      setAddMessage(error.response.data);
      setLoadingLogin(false);
    }
  };

  const handleEditContact = async (contactId) => {
    setLoadingLogin(true);
    const body = {
      nome,
      email,
      telefone,
    };

    try {
      const response = await apiAuth.put(`/contatos/${contactId}`, body)

      setEditMessage(response.data);
      setLoadingLogin(false);
      setUpdateList(!updateList);
    } catch (error) {
      setEditMessage(error.response.data);
      setLoadingLogin(false);
    }
  };

  const handleDeleteContact = async (contactId) => {
    setLoadingLogin(true);
    try {
      const response = await apiAuth.delete(`/contatos/${contactId}`)

      setDeleteMessage(response.data);

      setLoadingLogin(false);
      setUpdateList(!updateList);
    } catch (error) {
      setDeleteMessage(error.response.data);
      setLoadingLogin(false);
    }
  };

  return {
    modal,
    setModal,
    modalEdit,
    setModalEdit,
    handleListContacts,
    dadosContacts,
    nome,
    email,
    telefone,
    setNome,
    setEmail,
    setTelefone,
    handleAddContact,
    addMessage,
    contatoId,
    setContatoId,
    handleEditContact,
    editMessage,
    deleteMessage,
    handleDeleteContact,
    modalDelete,
    setModalDelete,
    tableMessage,
    setTableMessage,
    setAddMessage,
    setEditMessage,
    setDeleteMessage,
    updateList,
  };
}

export default useProfileContextProvider;
