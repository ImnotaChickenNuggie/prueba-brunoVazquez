import React from 'react'
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ProductCard = ({ id, image, title, category, price }) => {
    return (
        <Container>
            <Link to={`/product-detail/${id}`}>
                <Row>
                    <Col>
                        <img src={image} alt='this is a fake product' />
                    </Col>
                </Row>
            </Link>
            <h2>{title}</h2>
            <h6>{category}</h6>
            <h4>$ {price}</h4>
            <Button>Agregar al carrito</Button>
        </Container>
    )
}

export default ProductCard