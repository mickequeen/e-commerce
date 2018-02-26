// importando react
import React, {Component} from 'react';
import './product.css'

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
          <p className="Product-author">{this.props.price}</p>
        </div>
      </div>
      )

  }
}
// exportar componente
export default Product; 