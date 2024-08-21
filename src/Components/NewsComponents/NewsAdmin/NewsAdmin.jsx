import React, { useState, useEffect } from 'react';
import HTTPService from '../../../Services/HTTPService.jsx';
import Title from '../../TextComponents/Title/Title.jsx';
import EditModal from './EditModal.jsx';
import StainTitle from '../../TextComponents/StainTitle/StainTitle.jsx';
import { compareDesc } from 'date-fns';

function NewsAdmin({ setReload, reload }) {
  const [cards, setCards] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedCard, setEditedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;
  

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await HTTPService().getAllData();
       

        const sortedCards = response.sort((a, b) =>
          compareDesc(new Date(a.date), new Date(b.date))
        );

        setCards(sortedCards);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNews();
    if (reload) {

      setReload(false)
    }
  }, [reload, setReload]);

  const handleDelete = async (cardId) => {
    try {
      const confirmDelete = window.confirm("¿Está seguro de que desea eliminar este elemento?");
      if (!confirmDelete) {
        return; 
      }
      const response = await HTTPService().deleteData(cardId);
      setCards(cards.filter((card) => card.id !== cardId));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (card) => {
    setEditMode(true);
    setEditedCard(card);
    setShowModal(true);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', editedCard.title);
      formData.append('description', editedCard.description);


      const updatedCard = await HTTPService().updateData(editedCard.id, editedCard);
      setCards(cards.map((card) => (card.id === editedCard.id ? updatedCard : card)));
      setEditMode(false);
      setEditedCard(null);
      setShowModal(false);
      setReload(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedCard(null);
    setShowModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const startIndex = (currentPage - 1) * perPage;

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };


  return (
    <div id="NewsAdmin" className=" flex flex-col items-center w-4/5 md:w-2/5 mx-auto mb-10">
      <Title title="Noticias" />
      <StainTitle />
      <div className="flex flex-wrap gap-12 mt-10">
      {cards.slice(startIndex, startIndex + perPage).map((card) => (
          <div className="border-4 border-[#51C8FC] p-5 rounded-tl-none rounded-br-none rounded-tr-3xl rounded-bl-3xl min-w-[100%]" key={card.id}>
            <img src={card.urlImg} alt={card.title} className="w-48 h-48 object-cover" />
            {editMode && editedCard && editedCard.id === card.id ? (
              <>

                <input type="text" name="title" value={editedCard.title}
                  onChange={handleInputChange} className="w-full border border-gray-300 rounded py-2 px-3" />

                <textarea name="description" value={editedCard.description}
                  onChange={handleInputChange} className="w-full border border-gray-300 rounded py-2 px-3">
                </textarea>

              </>
            ) : (
              <>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </>
            )}
            <small>{card.date}</small>
            {editMode && editedCard && editedCard.id === card.id ? (
              <>

              </>
            ) : (
              <button
                onClick={() => handleEdit(card)}
                className="mr-2 bg-[#51C8FC] hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">Editar
              </button>
            )}
            <button onClick={() => handleDelete(card.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded">Eliminar
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-10 mt-5">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded-md bg-[#51C8FC] text-white mr-2"
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={startIndex + perPage >= cards.length}
          className="px-2 py-1 rounded-md bg-[#51C8FC] text-white"
        >
          Siguiente
        </button>
      </div>
      <EditModal
        showModal={showModal}
        setShowModal={setShowModal}
        editedCard={editedCard}
        setEditedCard={setEditedCard}
        handleSave={handleSave}
        handleCancel={handleCancel}
        handleInputChange={handleInputChange}

      />

    </div>
  );
}

export default NewsAdmin;

