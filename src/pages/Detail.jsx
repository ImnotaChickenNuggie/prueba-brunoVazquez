import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../redux/slices/productsSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { Container, Row, Col, Button, Alert, Placeholder, Breadcrumb } from 'react-bootstrap';
import HomeError from '../components/HomeError';
import WithoutStock from '../components/WithoutStock';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, status } = useSelector((state) => state.products);
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

  // Este es un loader en forma de skeleton para mostrar mientras se carga el producto
  if (status === 'loading') {
    return (
      <Container className="mt-5">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Cargando producto...</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col md={6}>
            <Placeholder as="div" animation="glow" className="w-100">
              <div style={{
                height: '400px',
                backgroundColor: '#e9ecef',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Placeholder xs={12} style={{ height: '100%' }} />
              </div>
            </Placeholder>
          </Col>
          <Col md={6}>
            <Placeholder as="h1" animation="glow" className="mb-4">
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder as="p" animation="glow" className="mb-3">
              <Placeholder xs={4} />
            </Placeholder>
            <div className="mb-4">
              <Placeholder as="span" animation="glow" className="me-2">
                <Placeholder xs={3} />
              </Placeholder>
              <Placeholder as="span" animation="glow">
                <Placeholder xs={3} />
              </Placeholder>
            </div>
            <Placeholder as="h2" animation="glow" className="mb-4">
              <Placeholder xs={3} />
            </Placeholder>
            <Placeholder as="p" animation="glow" className="mb-4">
              <Placeholder xs={12} />
              <Placeholder xs={12} />
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button xs={4} animation="glow" />
          </Col>
        </Row>
      </Container>
    );
  }

  if (status === 'failed') {
    return <><HomeError /></>;
  }

  if (!selectedProduct) {
    return <><WithoutStock /></>;
  }

  return (
    <Container className="mt-5">
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item active>{selectedProduct.title}</Breadcrumb.Item>
      </Breadcrumb>
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