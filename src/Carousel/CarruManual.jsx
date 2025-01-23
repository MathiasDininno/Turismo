import React from 'react';

function CarruManual({ setCurrentIndex, currentIndex }) {
  // Función para manejar retroceso
  const manejarAnterior = () => {
    setCurrentIndex(currentIndex === 0 ? 1 : currentIndex - 1); // Cambio de índice
  };

  // Función para manejar avance
  const manejarSiguiente = () => {
    setCurrentIndex((currentIndex + 1) % 2); // Cambio de índice
  };

  return (
    <div>
      <button className='anterior' onClick={manejarAnterior}>Anterior</button>
      <button className='siguiente' onClick={manejarSiguiente}>Siguiente</button>
    </div>
  );
}

export default CarruManual;
