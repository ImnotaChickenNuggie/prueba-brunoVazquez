import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal, removeFromCart } from '../redux/slices/cartSlice';
import { Container, Row, Col, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  if (cartItems.length === 0) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="info">
          Tu carrito está vacío
        </Alert>
        <Link to="/">
          <Button variant="primary">Continuar comprando</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="mb-4">Carrito de Compras</h2>
      <Row>
        <Col md={8}>
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-3">
              <Card.Body>
                <Row>
                  <Col md={2}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: 'auto', maxHeight: '100px', objectFit: 'contain' }}
                    />
                  </Col>
                  <Col md={6}>
                    <h5>{item.title}</h5>
                    <p className="text-muted">Categoría: {item.category}</p>
                    <p className="text-primary">${item.price}</p>
                  </Col>
                  <Col md={4} className="d-flex align-items-center justify-content-end">
                    <div className="d-flex align-items-center">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        -
                      </Button>
                      <span className="mx-3">{item.quantity}</span>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => dispatch({ type: 'cart/addToCart', payload: item })}
                        disabled={item.quantity >= 5}
                      >
                        +
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h4>Resumen del pedido</h4>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button variant="primary" className="w-100">
                Proceder al pago
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;