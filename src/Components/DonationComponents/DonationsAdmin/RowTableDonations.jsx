import React, { useState, useEffect } from 'react';
import HTTPDonationService from '../../../Services/HTTPDonationService';

function RowTableDonations({ donation, setReload }) {
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...donation });
  const [showUpdatedData, setShowUpdatedData] = useState(false);

  
  const handleDelete = () => {
    if (window.confirm('¿Está seguro de que desea eliminar este elemento?')) {
      HTTPDonationService()
        .deleteDonation(donation.id)
        .then(() => {
          setReload(true);
          setShowUpdatedData(true);
        })
        .catch(console.error);
    }
  };


  useEffect(() => {
    if (showUpdatedData) {
      setEditedData(null);
      HTTPDonationService()
        .getDonationById(donation.id)
        .then((updatedData) => {
          setEditedData(updatedData);
        })
        .catch(console.error);
    }
  }, [showUpdatedData, donation.id]);

  if (!editedData) {
    return null;
  }


  const handleEdit = () => {
    setEditing(true);
    setEditedData({ ...donation });
    setShowUpdatedData(false);
  };

  const handleSave = () => {
    HTTPDonationService()
      .updateDonation(donation.id, editedData)
      .then(() => {
        setReload(true);
        setEditing(false);
        setShowUpdatedData(true);
        return HTTPDonationService().getDonationById(donation.id);
      })
      .then((updatedData) => {
        setEditedData(updatedData);
       
      })
      .catch(console.error);
  };

  const handleCancel = () => {
    setEditing(false);
    setShowUpdatedData(false);
  };

  return (
    <>
      <tr className="bg-white border-b dark:bg-[#51C8FC] dark:border-[#51C8FC] text-[1rem]">
        <td className="border border-[#51C8FC] w-60 pl-3">
          {editing ? (
            <input
              type="text"
              value={editedData.name}
              onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
            />
          ) : (
            showUpdatedData ? editedData.name : donation.name
          )}
        </td>
        <td className="border border-[#51C8FC] w-60 pl-3">
          {editing ? (
            <input
              type="text"
              value={editedData.kmDonated}
              onChange={(e) => setEditedData({ ...editedData, kmDonated: e.target.value })}
            />
          ) : (
            showUpdatedData ? editedData.kmDonated : donation.kmDonated
          )}
        </td>
        <td>
          {editing ? (
            <>
              <button
                className="mr-2 bg-[#51C8FC] hover:bg-blue-700 text-white font-semibold ml-4 mt-2 py-1 px-2 rounded"
                onClick={handleSave}
              >
                Guardar
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </>
          ) : (
            <>
              <button
                className="mr-2 bg-[#51C8FC] hover:bg-blue-700 text-white font-semibold ml-4 mt-2 py-1 px-2 rounded"
                onClick={handleEdit}
              >
                Editar
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded"
                onClick={handleDelete}
              >
                Eliminar
              </button>
            </>
          )}

        </td>
      </tr>
    </>
  );
}

export default RowTableDonations;
