import React from 'react';
import AuthService from '../../Services/AuthService';
import { useState } from 'react';
import { WithRouter } from '../../Common/WithRouter';
import { Link } from "react-router-dom";
import './LoginForm.css';


function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        try {
            await AuthService.login(username, password);
            props.router.navigate("/admin");
            window.location.reload();
        } catch (error) {
            alert("Usuario no registrado");
        }
    };

    function toRegister(){
        props.router.navigate("/register");
    }

    return (
        <div className="container flex justify-center items-center mt-5">

            <form onSubmit={handleSubmit} className="form">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Usuario:</label>
                    <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} name="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Contraseña:</label>
                    <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="flex items-center justify-between">
                    <button onClick={() => handleSubmit()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >Iniciar sesión</button>
                </div>

            </form>
        </div>
    );
}

export default WithRouter(LoginForm);






