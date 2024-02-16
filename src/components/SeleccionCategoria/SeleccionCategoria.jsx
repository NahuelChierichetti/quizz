import React from 'react';
import './SeleccionCategoria.css'

function SeleccionCategoria({ onSelectCategoria }) {
  const handleClick = (categoria) => {
    onSelectCategoria(categoria);
  };

  return (
    <>
    <div className='container-principal'>
        <div className='bg-weare'></div>
        <div className='box-quizz'>
            <h2 className='text-4xl text-center'>SELECCIONÁ TU CATEGORÍA</h2>
            <div className='container-btnCategorias my-4'>
                <button onClick={() => handleClick("Electro")} className='btn-categoria'>Electro</button>
                <button onClick={() => handleClick("Moda")} className='btn-categoria'>Moda</button>
            </div>
        </div>
    </div>
    </>
  );
}

export default SeleccionCategoria;