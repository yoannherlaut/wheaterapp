$("document").ready(function() {

  $("li").each(function(i) {
    console.log(i);
  });


  $( function() {
    $( ".list-group" ).sortable();
    $( ".list-group" ).disableSelection();
  } );
  
  
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Lyon&APPID=9b754f1f40051783e4f72c176953866e&units=metric&lang=fr", function(data) {
    console.log(data);
  });
  
})
