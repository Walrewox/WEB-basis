$(document).ready(function(){
  $('#author').click(function(){
    $.ajax({
      url: 'ajax-content/author.html',
      success: function(html){
        $('#info').html(html);
      }
    });
    $("*").removeClass('choice-active');
    $(this).addClass("choice-active");
    
    window.history.pushState('author',null,'author');
  });
  $('#bio').click(function(){
    $.ajax({
      url: 'ajax-content/bio.php',
      success: function(html){
        $('#info').html(html);
      }
    });
    $("*").removeClass('choice-active');
    $(this).addClass("choice-active");
    
    window.history.pushState('biography',null,'bio');
  });
  $('#edu').click(function(){
    $.ajax({
      url: 'ajax-content/edu.html',
      success: function(html){
        $('#info').html(html);
      }
    });
    $("*").removeClass('choice-active');
    $(this).addClass("choice-active");
    
    window.history.pushState('education',null,'edu');
  });
  $('#hobby').click(function(){
    $.ajax({
      url: 'ajax-content/hobby.html',
      success: function(html){
        $('#info').html(html);
      }
    });
    $("*").removeClass('choice-active');
    $(this).addClass("choice-active");
    
    window.history.pushState('hobby',null,'hobby');
  });
}); 