$(document).ready(function(){
  $.ajax({
    url: window.location.href + 'src/data.json',
    type: 'GET',
    datatype: 'json'
  })
  .done(function(response){
    let data = response.articulos
    console.log(data)
    for(var i = 0; i < data.length; i++ ){
      console.log(`<Product title="${data[i].title}" price="${data[i].price}" image="src/${data[i].img}"/>`)

    }
  })
  .fail(function(error){
    console.log('failed')
  })
});