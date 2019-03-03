import React from 'react';
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers'


class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      img: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string
    }),
    addToOrder: PropTypes.func,
  }

  render() {
    const { name, image, desc, price, status } = this.props.details
    const isAvailable = status === 'available'
    return (
      <li className='menu-fish'>
        <img src={image} alt={name} />
        <span className="fish-name">{name}</span>
        <h3 className="price">{formatPrice(price)}</h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>{isAvailable ? 'Add to cart' : 'Sold Out'}</button>
      </li>
    )
  }
}

export default Fish;