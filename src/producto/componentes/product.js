// importando react
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './product.css';

//creando componente product
class Product extends Component {
  //contiene componente html
  render() {
    //datos del componente
    return (
      <div className="Product">
        <div className="Product-cover">
          <img src={this.props.image} alt="" width={260} height={160} className="Product-image"/>
          <h3 className="Product-title">{this.props.title}</h3>
          <p className="Product-price">{this.props.price}</p>
          <button>COMPRAR</button>
        </div>
      </div>
      )

  }
}

// para validar que los datos en las propiedades son del tipo adecuado
Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string
}
// exportar componente
export default Product; 