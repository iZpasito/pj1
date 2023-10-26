import React, { useContext, useState} from 'react';
import AuthContext from '../Context/authContext';


const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    AuthContext.loginUser(credentials);
  };

    return (
        <div className="h-screen relative flex flex-col justify-center min-w-367 w-auto shadow-mt overflow-hidden bg-cover bg-[url(/src/assets/campus1.png)]">
        <div className="w-full p-8 m-auto shadow-2xl shadow-black-500 md:shadow-2xl md:shadow-black-500  rounded-md  mx-auto  lg:max-w-xl ">
        <h1 className="text-3xl font-semibold text-center text-blue-600">
            Iniciar Sesion
          </h1>
          <form className="mt-6 bg-green-560" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="email" className="block text-xl font-semibold text-gray-800">
                Correo
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={credentials.email}
                placeholder='...@alu.ucm.cl / @ucm.cl'
                className="text-xl block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-xl font-semibold text-gray-800">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={credentials.password}
                placeholder='Contraseña'
                className="text-xl block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 text-xl rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700">
                Acceder
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  export default Login;