import axios from 'axios';
import AuthHeader from './AuthHeader';

function HTTPDonationService () {

  const url = 'http://localhost:9060/api/v1/donations';

  const getAllDonation = async () => {
    const response = await axios.get(`${url}/getAll`);
    return response.data;
  };

  const getDonationById = async (id) => {
    const response = await axios.get(`${url}/${id}`, { headers:{ "Authorization": AuthHeader() }});
    return response.data;

  };
  

  const createDonation = async (data) => {
    
    const response = await axios.post(`${url}/newDonation`,data, {headers:{"Content-Type" : "application/json",  "Authorization":  AuthHeader() }});
  
    return response.data;

  };

  const updateDonation = async (id, data) => {
    const response = await axios.put(`${url}/donation/${id}`, data, { headers:{ "Authorization": AuthHeader() }});
    return response.data;

  };

  const deleteDonation = async (id) => {
    const response = await axios.delete(`${url}/donation/${id}`,{ headers:{ "Authorization": AuthHeader() }});
    return response.data;

  };
  const getTotalKms = async () => {
    
      const response = await axios.get(`${url}/total-donated`);
      return response.data;
    
  };
  return {
    getAllDonation,
    getDonationById,
    createDonation,
    updateDonation,
    deleteDonation,
    getTotalKms,
    url

  };
};

export default HTTPDonationService;