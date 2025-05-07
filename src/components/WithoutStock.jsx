import React from 'react'
import{Link} from 'react-router'
import NoStock from '/no-stock.webp'

// Este componente se muestra cuando un producto no existe o ya no está disponible
const WithoutStock = () => {
  return (
      <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 p-3">
          <img
              src={NoStock}
              alt="Imagen para indicar que el producto no está disponible"
              style={{ width: '75%', maxWidth: '500px' }}
              className="mb-4"
          />
          <h3 className="mb-3 mx-4">¡Ups! Todos aman este producto que lo han agotado, estamos surtiendo nuestro inventario y pronto estará disponible nuevamente. 🎉</h3>
          <Link to='/' className="btn btn-primary">
              Ver otros productos
          </Link>
      </div>
  )
}

export default WithoutStock