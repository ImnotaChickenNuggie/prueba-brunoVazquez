import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { items, selectedCategory } = useSelector((state) => state.products);
  const categories = [...new Set(items.map(product => product.category))];
  
  //Cambia la categoría seleccionada 
  const handleCategoryClick = (category) => {
    dispatch({ type: 'products/setSelectedCategory', payload: category });
  };

  return (
    <div className="mb-4">
      <h5 className="mb-3">Categorías:</h5>
      <div className="d-flex flex-wrap gap-2">
        <button
          className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => handleCategoryClick('all')}
        >
          Todos los productos
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;