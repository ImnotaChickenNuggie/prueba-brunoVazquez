import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, selectFilteredProducts } from '../redux/slices/productsSlice'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../components/ProductCard'
import CategoryFilter from '../components/CategoryFilter'
import Loader from '../components/HomeLoader'
import HomeError from '../components/HomeError';

const Home = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.products);
  const filteredProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container className="py-4">
      {status === 'loading' ? (<><Loader /></>)
        : status === 'failed' ? (<>
          <HomeError />
        </>)
          : (<>
            <h1 className="mb-4">Nuestros Productos</h1>
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
                  <h3>Actualmente no hay productos disponibles, estamos trabajando en ello.</h3>
                </Col>
              )}
            </Row>
          </>)}
    </Container>
  )
}

export default Home