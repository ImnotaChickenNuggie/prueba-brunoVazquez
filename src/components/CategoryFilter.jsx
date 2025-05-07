import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);
  const categories = [...new Set(items.map(product => product.category))];

  const handleCategoryClick = (category) => {
    dispatch({ type: 'products/setSelectedCategory', payload: category });
  };

  return (
    <div className="mb-4">
      <h5 className="mb-3">Filtrar por categoría:</h5>
      <div className="d-flex flex-wrap gap-2">
        <button 
          className="btn btn-outline-primary"
          onClick={() => handleCategoryClick('all')}
        >
          Todas
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className="btn btn-outline-primary"
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