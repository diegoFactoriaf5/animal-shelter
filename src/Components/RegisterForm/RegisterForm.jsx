import React from 'react';
import AuthService from '../../Services/AuthService';
import { useState } from 'react';
import { WithRouter } from '../../Common/WithRouter';
import './RegisterForm.css';


function RegisterForm(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');


    const handleSubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        try {
            await AuthService.register(username, email, password, role);
            props.router.navigate("/admin");
            window.location.reload();
        } catch (error) {
            alert("Registro incorreco");
        }
    };

    return (
        <div className="container flex justify-center items-center mt-5">

            <form onSubmit={handleSubmit} className="form">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Usuario:</label>
                    <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} name="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Email:</label>
                    <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Contraseña:</label>
                    <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Role:</label>
                    <input type="text" id="role" placeholder="ingrese ADMIN o USER" value={role} onChange={(event) => setRole(event.target.value)} name="role" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="flex items-center justify-between">
                    <button onClick={() => handleSubmit()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default WithRouter(RegisterForm);






