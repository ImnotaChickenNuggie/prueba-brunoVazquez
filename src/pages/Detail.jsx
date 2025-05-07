import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../redux/slices/productsSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, status, error } = useSelector((state) => state.products);
  const cartItems = useSelector(state => state.cart.items);
  const currentItem = cartItems.find(item => item.id === Number(id));
  const quantity = currentItem ? currentItem.quantity : 0;

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (quantity < 5 && selectedProduct) {
      dispatch(addToCart(selectedProduct));
    }
  };

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
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.title} 
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </Col>
        <Col md={6}>
          <h1 className="mb-4">{selectedProduct.title}</h1>
          <p className="text-muted mb-3">Categoría: {selectedProduct.category}</p>
          <div className="mb-4">
            <span className="badge bg-primary me-2">Calificación: {selectedProduct.rating?.rate}</span>
            <span className="badge bg-secondary">Reseñas: {selectedProduct.rating?.count}</span>
          </div>
          <h2 className="text-primary mb-4">${selectedProduct.price}</h2>
          <p className="mb-4">{selectedProduct.description}</p>
          {quantity >= 5 ? (
            <Alert variant="warning" className="mb-3">
              Máximo 5 unidades por producto
            </Alert>
          ) : null}
          <Button 
            variant="primary" 
            onClick={handleAddToCart}
            disabled={quantity >= 5}
          >
            {quantity > 0 ? `Añadir al carrito (${quantity}/5)` : 'Añadir al carrito'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;