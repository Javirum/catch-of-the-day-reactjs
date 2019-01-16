import React from 'react';
import { formatPrice } from '../helpers'

class Fish extends React.Component {
  render() {
    const { name, img, desc, price } = this.state.details
    return (
      <li className='menu-fish'>
        <img src={img} alt={name} />
        <span className="price">{price}</span>
        <h3 className="fish-name">{formatPrice(name)}</h3>
        <p>{desc}</p>
        <button>Add to cart</button>
      </li>
    )
  }
}

export default Fish;