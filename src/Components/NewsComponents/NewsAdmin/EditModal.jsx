import React, { useState } from 'react';
import InputPhoto from '../../InputPhoto/InputPhoto';

function EditModal({ showModal, setShowModal, editedCard, setEditedCard, handleSave, handleCancel, handleInputChange}) {
  const closeModal = () => {
    setShowModal(false);
    setEditedCard(null);
  };

  const handleUrlImgChange = (url) => {
    setEditedCard((prevState) => ({
      ...prevState,
      urlImg: url, 
    }));
  };

  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-8 border-4 border-[#51C8FC] max-w-lg w-full shadow-md px-8 pt-6 pb-8 mb-4 rounded-tl-none rounded-br-none rounded-tr-3xl rounded-bl-3xl">
          <h2 className="text-2xl text-[#51C8FC] font-bold mb-4">Edita tu post</h2>

          <form>
            <div className="mb-4">
              <label htmlFor="title" className="block font-semibold mb-2">Título</label>
              <input type="text" name="title" value={editedCard.title} onChange={handleInputChange} className="w-full border border-[#51C8FC] rounded py-2 px-3" />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block font-semibold mb-2">Descripción</label>
              <textarea name="description" value={editedCard.description} onChange={handleInputChange} className="w-full border border-[#51C8FC] rounded py-2 px-3"></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="photo" className="block font-semibold mb-2">Foto</label>
              <InputPhoto setUrlImg={handleUrlImgChange} value={editedCard.urlImg}/>
            </div>

            <div className="flex justify-end">
              <button type="button" className="bg-[#51C8FC] hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded mr-2" onClick={handleSave}>Guardar</button>
              <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded" onClick={handleCancel}>Cancelar</button>
            </div>
          </form>
        </div>
        <div className="" onClick={closeModal}></div>
      </div>
    )
  );
}

export default EditModal;
