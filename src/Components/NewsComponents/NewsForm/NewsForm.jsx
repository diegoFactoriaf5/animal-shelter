import React, { useState, useRef } from 'react';
import HTTPService from '../../../Services/HTTPService';
import { Alert } from "@material-tailwind/react";
import { WithRouter } from '../../../Common/WithRouter';

function NewsForm({ setReload }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [urlImg, setUrlImg] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const inputPhotoRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: title,
      description: description,
      urlImg: urlImg
    };

   
    inputPhotoRef.current.resetField();
    handleCancel();

    HTTPService().createData(data)
      .then(response => {
        setReload(true);
        setShowAlert(true);
        setAlertMessage('El post se ha creado exitosamente');
      })
      .catch(error => {
        setShowAlert(true);
        setAlertMessage('Error al crear el post');
      });
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setUrlImg('');
    setShowAlert(false);
    setAlertMessage('');
    inputPhotoRef.current.resetField();
  };

  return (
    <div className="max-w-md mx-auto bg-white border-4 border-[#51C8FC] shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-tl-none rounded-br-none rounded-tr-3xl rounded-bl-3xl">
      <h2 className="text-xl mb-4 font-bold">Escribe Tu Post</h2>
      {showAlert && <Alert color={alertMessage.includes('Error') ? 'red' : 'blue'}>{alertMessage}</Alert>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Título</label>
          <input onChange={(event) => { setTitle(event.target.value) }} value={title} className="appearance-none border rounded border-[#51C8FC] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" required placeholder="Ingresa el título" autoFocus />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Descripción</label>
          <textarea onChange={(event) => { setDescription(event.target.value) }} value={description} rows={7} className="appearance-none border border-[#51C8FC] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" required id="description" placeholder="Historia de la mascota" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="url">Url</label>
          <textarea onChange={(event) => { setUrlImg(event.target.value) }} value={urlImg} className="appearance-none border rounded border-[#51C8FC] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" required id="urlImg" placeholder="Añade una foto" autoFocus/>
        </div>
       
        <div className="mb-4">
          <button className="bg-[#51C8FC] hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="submit" content='Enviar' icon='like'>Enviar</button>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default WithRouter(NewsForm);
