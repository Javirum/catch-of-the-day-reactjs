import React from 'react';
import { formatPrice } from '../helpers'

class Fish extends React.Component {
  render() {
    const { name, img, desc, price, status } = this.props.details
    const isAvailable = status === 'available'
    return (
      <li className='menu-fish'>
        <img src={img} alt={name} />
        <span className="fish-name">{name}</span>
        <h3 className="price">{formatPrice(price)}</h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>{isAvailable ? 'Add to cart' : 'Sold Out'}</button>
      </li>
    )
  }
}

export default Fish;