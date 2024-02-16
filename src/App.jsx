import './App.css'
import React, { useState } from 'react'
import SeleccionCategoria from './components/SeleccionCategoria/SeleccionCategoria'
import Electro from './components/Electro/Electro'
import Moda from './components/Moda/Moda'

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div>
      {!categoriaSeleccionada && <SeleccionCategoria onSelectCategoria={handleCategoriaSeleccionada} />}
      {categoriaSeleccionada === "Electro" && <Electro/>}
      {categoriaSeleccionada === "Moda" && <Moda/>}
    </div>
  )
}

export default App
