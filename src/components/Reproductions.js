import { ProductList } from './Products/ProductList';
import { useState } from 'react';
import { data } from '../data/products';

export const Reproductions = () => {
  const categories = ['FR', 'DE', 'EN'];
  const [products, setProducts] = useState(data.FR);
  const [activeButton, setActiveButton] = useState('FR');

  const handleProductChange = (category) => {
    setActiveButton(category);
    setProducts(data[category]);
  };

  return (
    <main className={'container main-content'}>
      <div className={'main-content__header'}>
        <h1 className={'main-content__title'} id={'reproductions'}>Репродукции</h1>
        <div className={'carousel-container'}>
          <ul className={'main-content__button-list'}>
            {categories.map((category) => (
              <li key={category} className={''}>
                <button
                  onClick={() => handleProductChange(category)}
                  className={`main-content__button${activeButton === category ? 'Active' : 'InActive'}`}>
                  {category === 'FR' ? 'Франция' :
                    category === 'DE' ? 'Германия' : 'Англия'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ProductList products={products} />
    </main>
  );
};
