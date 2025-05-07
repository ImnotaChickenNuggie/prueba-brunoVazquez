import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, selectFilteredProducts } from '../redux/slices/productsSlice'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../components/ProductCard'
import CategoryFilter from '../components/CategoryFilter'

const Home = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.products);
  const filteredProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container className="py-4">
      <h2 className="mb-4">Productos</h2>
      {status === 'loading' && <p>Cargando...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      
      <CategoryFilter />
      
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col key={product.id}>
              <ProductCard 
                id={product.id} 
                image={product.image} 
                title={product.title} 
                category={product.category} 
                price={product.price} 
              />
            </Col>
          ))
        ) : (
          <Col>
            <p>No hay productos disponibles</p>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default Home