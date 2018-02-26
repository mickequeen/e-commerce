// importando react
import React, {Component} from 'react';
import './nav.css'

//creando componente product
class Nav extends Component {
  //contiene componente html
  render() {
    //datos del componente
    return (
      <div className="Nav">
        <img src={this.props.logo} alt="" width={255} height={155}/>
      </div>
      )

  }
}
// exportar componente
export default Nav; 