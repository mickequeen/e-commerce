
import React from 'react';
import {render} from 'react-dom';
// se le coloca nombre a los componente para poder manipularlos y siempre se empieza con mayúscula
import Productos from './src/producto/componentes/productos.js';
import MyApp from './src/paypal/componentes/paypal.js';
// datos api
import data from './src/data.json';
import Nav from './src/navegador/componente/nav.js';
// sección donde tiene que renderear
const container = document.getElementById('app');
const navegador = document.getElementById('head');
//const paypal = document.getElementsByClassName('paypal-button-container');

render(<Nav logo="src/images/logo.png"/>, navegador);
render(<Productos data={data}/>, container);

/*render(<Productos title={45} price="Precio" image="src/html5.jpg"/>, container);*/

// Intento de conección simulación pago paypal
//render(<MyApp/>, paypal);
/*
paypal.Button.render({
  env: 'sandbox',
  client: {
    sandbox:'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
    production: 'AdR48mtPs5CD-FD8GE2wIuh2ysXRmGkHH67Rl823IcOc0y95o2oCSW6cujuIIxZWjoYuDW6cyTcj6MrC'
  },
  payment: function(data, actions) {
    return actions.payment.create({
      payment: {
        transactions: [
        {
          amount: { total: '10', currency: 'USD' }
        }
        ]
      }
    });
  },
  onAuthorize: function(data, actions) {
    return actions.payment.execute().then(function() {
      window.alert('Payment Complete!');
    });
  }
    }, paypal;
    */