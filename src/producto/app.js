$(document).ready(function(){
  $.ajax({
    url: window.location.href + 'src/data.json',
    type: 'GET',
    datatype: 'json'
  })
  .done(function(response){
    console.log(response)
  })
  .fail(function(error){
    console.log('failed')
  })
});