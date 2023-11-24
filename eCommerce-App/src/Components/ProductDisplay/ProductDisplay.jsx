import { useContext } from 'react';
import PropTypes from 'prop-types';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  // Check if product is undefined
  if (!product) {
    return null;
  }

  return (
    <div className='productDisplay'>
      <div className='productDisplay-left'>
        <div className='productDisplay-img-list'>
          {/* Check if product has the 'image' property before mapping */}
          {product.image && (
            [1, 2, 3, 4].map((index) => (
              <img key={index} src={product.image} alt={`Product ${index}`} />
            ))
          )}
        </div>
        <div className='productDisplay-img'>
          {/* Check if product has the 'image' property */}
          {product.image && <img className='productDisplay-main-img' src={product.image} alt='Main Product' />}
        </div>
      </div>
      <div className='productDisplay-right'>
        <h1>{product.name}</h1>
        <div className='productDisplay-right-star'>
          {[1, 2, 3, 4, 5].map((index) => (
            <img key={index} src={index <= product.rating ? star_icon : star_dull_icon} alt={`Star ${index}`} />
          ))}
          <p>({product.reviewCount})</p>
        </div>
        <div className='productDisplay-right-prices'>
          <div className='productDisplay-right-price-old'>${product.old_price}</div>
          <div className='productDisplay-right-price-new'>${product.new_price}</div>
        </div>
        <div className='productDisplay-right-description'>{product.description}</div>
        <div className='productDisplay-right-size'>
          <h1>Select Size</h1>
          <div className='productDisplay-size-options'>
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div key={size}>{size}</div>
            ))}
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className='productDisplay-right-category'>
          <span>Category :</span> {product.category.join(', ')}
        </p>
        <p className='productDisplay-right-category'>
          <span>Tags :</span> {product.tags.join(', ')}
        </p>
      </div>
    </div>
  );
};

// PropTypes definition
ProductDisplay.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    old_price: PropTypes.number.isRequired,
    new_price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default ProductDisplay;




