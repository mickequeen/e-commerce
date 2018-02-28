import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';


/* Rendereando el botón de compra */
export default class MyApp extends React.Component {
  render() {
    // En caso de que se origine el pago exitosamente
    const onSuccess = (payment) => {
      console.log("The payment was succeeded!", payment);
    }
    const onCancel = (data) => {
      // El usurio puso cancelar o cerró ventana emergente
      console.log('The payment was cancelled!', data);
    }
    const onError = (err) => {
      // En caso de no poder cargar o algo bloquea la carga
      console.log("Error!", err);
    }
      let env = 'sandbox';
      let currency = 'USD';
      let total = 10;
      const client = {
        sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
        production: 'AdR48mtPs5CD-FD8GE2wIuh2ysXRmGkHH67Rl823IcOc0y95o2oCSW6cujuIIxZWjoYuDW6cyTcj6MrC'
        }
      return (
        <PaypalExpressBtn client={client} currency={'USD'} total={1.00} />
        );
    }
}