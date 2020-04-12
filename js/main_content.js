function active(id){
  $('#targetdiv').load('php/handler.php?id='+id, function(){  
    $('.class').each(function(){
      $('a').removeClass('active');
      $(this).addClass('active');      
    });
  });
}

$(document).ready(function(){  
  $('#bio').click(function(){
    $.ajax({
      url: 'content/bio.php',
      cache: false,
      success: function(html){
        $("#info").html(html);
      }
    });
    $(this).addClass("choice-active");
  });
  $('#edu').click(function(){
    $.ajax({
      url: 'content/edu.php',
      cache: false,
      success: function(html){
        $("#info").html(html);
      }
    });
  });
  $('#author').click(function(){
    $.ajax({
      url: 'content/author.php',
      cache: false,
      success: function(html){
        $("#info").html(html);
      }
    });
  });
}); 