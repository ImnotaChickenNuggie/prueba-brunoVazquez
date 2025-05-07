import React from 'react'
import { Link } from 'react-router'
import NotFoundImage from '/404.webp'

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 p-3">
      <img
        src={NotFoundImage}
        alt="Imagen para indicar que la página no existe"
        style={{ width: '50%', maxWidth: '400px' }}
        className="mb-4"
      />
      <h3 className="mb-3">¡Ups! Parece que la página que buscas no existe 😔</h3>
      <Link to='/' className="btn btn-primary">
        Ir a Inicio
      </Link>
    </div>
  )
}

export default NotFound