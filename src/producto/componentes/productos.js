import React, {Component} from 'react';
import Product from './product.js';

class Productos extends Component{
  render() {
    const datos = this.props.data.articulos;
    console.log(this.props.data.articulos);
    return (
      <div>
        {
          datos.map((info) => {
            return <Product title={info.title} image={info.img} price={info.price}/>
          })
        }
      </div>
    )
  }
}

export default Productos;