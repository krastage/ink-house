export const ProductDetails = ({ product }) => {
  return (
    <div className={'product'}>
      <img src={product.image} alt={product.name} />
      <p className={'product__author'}>{product.author}</p>
      <h3 className={'product__name'}>{product.name}</h3>
      <p className={'product__fabric'}>{product.fabric}</p>
      <p className={'product__price'}>{product.price}</p>
      <button className={'product__button'}>В корзину</button>
    </div>
  );
};
