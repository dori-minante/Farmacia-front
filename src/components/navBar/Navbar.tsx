import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import logo from '../../assets/logo.png';

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert('Usuário deslogado com sucesso');
    navigate('/login');
  }

  return (
    <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
      <div className="container flex justify-between text-lg">
        <Link to='/home' className='text-2xl font-bold uppercase flex items-center'>
          <img src={logo} alt="Logo" className="h-8 mr-2" /> {/* Aqui está o seu logo */}
          Farmacia do Front
        </Link>

        <div className='flex gap-4'>
          <div className='hover:underline'>Produtos</div>
          <Link to='/temas' className='hover:underline'>Categorias</Link>
          <div className='hover:underline'>Cadastrar categoria</div>
          <div className='hover:underline'>Perfil</div>
          <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
