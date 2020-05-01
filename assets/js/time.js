function show(){
  $.ajax({  
    url: "ajax-content/time.php",  
    cache: false,  
    success: function(html){  $("#time").html(html); }  
  });
}  
$(document).ready(function(){
  show();
  setInterval('show()',30000);  
});