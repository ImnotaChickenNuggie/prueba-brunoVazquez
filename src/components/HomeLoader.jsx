import React from 'react'
import '../styles/loader.css'

// Este componente se muestra como un loader mientras se cargan los productos
const HomeLoader = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <span className="loader"></span>
            <h2 className="mt-3">Cargando ...</h2>
        </div>
    )
}

export default HomeLoader