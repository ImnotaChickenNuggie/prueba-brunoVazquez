import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../redux/slices/productsSlice';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div className="container mt-5 text-center">Cargando información...</div>;
  }

  if (status === 'failed') {
    return <div className="container mt-5 text-center text-danger">Error: {error}</div>;
  }

  if (!selectedProduct) {
    return <div className="container mt-5 text-center">Producto no encontrado</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.title} 
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-4">{selectedProduct.title}</h1>
          <p className="text-muted mb-3">Categoría: {selectedProduct.category}</p>
          <div className="mb-4">
            <span className="badge bg-primary me-2">Calificación: {selectedProduct.rating?.rate}</span>
            <span className="badge bg-secondary">Reseñas: {selectedProduct.rating?.count}</span>
          </div>
          <h2 className="text-primary mb-4">${selectedProduct.price}</h2>
          <p className="mb-4">{selectedProduct.description}</p>
          <button className="btn btn-primary">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;