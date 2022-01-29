import { useState } from "react";
import useLoginContext from "../../Hooks/LoginScreen/useLoginContext";

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

  const { storage, setLoadingLogin } = useLoginContext();

  const handleListContacts = async () => {
    setLoadingLogin(true);
    try {
      const dados = await (
        await fetch("https://kontacts-api-test.herokuapp.com/contatos", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + storage,
          },
        })
      ).json();

      if (dados) {
        setDadosContacts(dados);
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
      const dados = await (
        await fetch("https://kontacts-api-test.herokuapp.com/contatos", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + storage,
          },
        })
      ).json();

      setAddMessage(dados);
      setNome("");
      setEmail("");
      setTelefone("");

      setUpdateList(!updateList);
      setLoadingLogin(false);
    } catch (error) {
      console.log(error);
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
      const dados = await (
        await fetch(
          "https://kontacts-api-test.herokuapp.com/contatos/" + contactId,
          {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
              "content-type": "application/json",
              Authorization: "Bearer " + storage,
            },
          }
        )
      ).json();

      setEditMessage(dados);
      setLoadingLogin(false);
      setUpdateList(!updateList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteContact = async (contactId) => {
    setLoadingLogin(true);
    try {
      const dados = await (
        await fetch(
          "https://kontacts-api-test.herokuapp.com/contatos/" + contactId,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
              Authorization: "Bearer " + storage,
            },
          }
        )
      ).json();

      setDeleteMessage(dados);

      setLoadingLogin(false);
      setUpdateList(!updateList);
    } catch (error) {
      console.log(error);
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
