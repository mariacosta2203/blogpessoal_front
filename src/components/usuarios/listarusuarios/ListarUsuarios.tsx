import { useEffect, useState } from 'react';

interface Usuario {
  id: number;
  name: string;
}

function ListarUsuarios() {

  const [usuarios] = useState<Usuario[]>([]);

  async function consultarUsuarios() {

    
    
  }

  useEffect(() => {
    consultarUsuarios();
  }, []);

  return (
    <div className='lista'>
      <h1>Lista de usuários - Gerada pelo Axios</h1>
      <ul>
        {usuarios.map( (usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListarUsuarios;