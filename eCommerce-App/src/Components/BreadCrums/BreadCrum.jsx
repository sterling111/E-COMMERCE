import PropTypes from 'prop-types';
import './BreadCrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;

  if (!product || !product.category || !product.name) {
    return null;
  }

  return (
    <div className='breadCrum'>
      HOME <img src={arrow_icon} alt='' /> SHOP <img src={arrow_icon} alt='' /> {product.category} <img src={arrow_icon} alt='' /> {product.name}
    </div>
  );
};

// PropTypes validation
Breadcrum.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Breadcrum;


