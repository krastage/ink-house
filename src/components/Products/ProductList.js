import { ProductDetails } from './ProductDetails';

export const ProductList = ({ products }) => {
  return (
    <div className={'main-content__product-list'}>
      {products.map((product, index) =>
        <ProductDetails product={product} key={index} />
      )}
    </div>
  );
};
