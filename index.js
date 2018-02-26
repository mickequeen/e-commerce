//console.log("hola");

import React from 'react';
import {render} from 'react-dom';
// se le coloca nombre a los componente para poder manipularlos y siempre se empieza con mayúscula
import Product from './src/producto/componentes/product.js';
// sección donde tiene que renderear
const container = document.getElementById('app');

render(<Product title="Título!" price="Precio" image="src/html5.jpg"/>, app);