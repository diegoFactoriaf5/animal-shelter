import axios from 'axios';
import AuthHeader from './AuthHeader';

function HTTPService () {

  const url = 'http://localhost:9060/api/v1/post';

  const getAllData = async () => {
    const response = await axios.get(`${url}/getAll`);
    return response.data;
  };

  const getDataById = async (id) => {
    const response = await axios.get(`${url}/${id}`, { headers:{ "Authorization": AuthHeader() }});
    return response.data;
  };
  

  const createData = async (data) => {
    
    const response = await axios.post(`${url}`,data, {headers:{"Content-Type" : "application/json",  "Authorization":  AuthHeader() }});
    return response.data;

  };

  const updateData = async (id, data) => {
    const response = await axios.put(`${url}/update/${id}`, data, { headers:{ "Authorization": AuthHeader() }});
    return response.data;

  };

  const deleteData = async (id) => {
    const response = await axios.delete(`${url}/delete/${id}`, { headers:{ "Authorization": AuthHeader() }});
    return response.data;

  };

  return {
    getAllData,
    getDataById,
    createData,
    updateData,
    deleteData,
    url

  };
};

export default HTTPService;