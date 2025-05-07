import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productsSlice'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../components/ProductCard'


const Home = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);
  return (
    <div>
      <h2>Productos</h2>
      {status === 'loading' && <p>Cargando...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <Row>
        <Col>
          {items.map((product) => (
            <ProductCard key={product.id} id={product.id} image={product.image} title={product.title} category={product.category} price={product.price} />
          ))}
        </Col>
      </Row>
    </div>
  )
}

export default Home