import React from 'react';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { Card, Button, Alert } from 'react-bootstrap';

const ProductCard = ({ id, image, title, category, price }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const currentItem = cartItems.find(item => item.id === id);
    const quantity = currentItem ? currentItem.quantity : 0;

    const handleAddToCart = () => {
        if (quantity < 5) {
            dispatch(addToCart({ id, image, title, category, price }));
        }
    };

    return (
        <Card className="h-100">
            <Link to={`/product-detail/${id}`} className="text-decoration-none">
                <Card.Img 
                    variant="top" 
                    src={image} 
                    alt={title}
                    style={{ height: '200px', objectFit: 'contain', padding: '1rem' }}
                />
            </Link>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate">{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                <Card.Text className="text-primary fw-bold">${price}</Card.Text>
                {quantity >= 5 ? (
                    <Alert variant="warning" className="py-1 mb-2">
                        Máximo 5 unidades
                    </Alert>
                ) : null}
                <Button 
                    variant="primary" 
                    onClick={handleAddToCart}
                    disabled={quantity >= 5}
                    className="mt-auto"
                >
                    {quantity > 0 ? `Agregar (${quantity}/5)` : 'Agregar al carrito'}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;