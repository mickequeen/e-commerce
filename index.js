
import React from 'react';
import {render} from 'react-dom';
// se le coloca nombre a los componente para poder manipularlos y siempre se empieza con mayúscula
import Productos from './src/producto/componentes/productos.js';
import Paypal from './src/paypal/componentes/paypal.js';
// datos api
import data from './src/data.json';
import Nav from './src/navegador/componente/nav.js';
// sección donde tiene que renderear
const container = document.getElementById('app');
const navegador = document.getElementById('head');

render(<Nav logo="src/images/logo.png"/>, navegador);

render(<Productos data={data}/>, container);

/*render(<Productos title={45} price="Precio" image="src/html5.jpg"/>, container);*/