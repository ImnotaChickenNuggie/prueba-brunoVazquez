import React from 'react'
import Error from '/error.webp'

// Este componente se muestra cuando hay un error en la carga de la página
const HomeError = () => {
    // Función para recargar la página nuevamente si falla
    const handleReload = () => {
        window.location.reload(true);
    };
    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 p-3">
            <img
                src={Error}
                alt="Imagen que indica que ocurrió un error en la página"
                style={{ width: '50%', maxWidth: '400px' }}
                className="mb-4"
            />
            <h3 className="mb-3">¡Ups! Parece que ocurrió un error en la página.<br />Prueba actualizando el sitio.</h3>
            <button className="btn btn-primary" onClick={handleReload}>
                Actualizar
            </button>
        </div>
    )
}

export default HomeError