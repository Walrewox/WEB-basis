$(document).ready(function(){
  $('#author').click(function(){
    $.ajax({
      url: 'ajax-content/author.html',
      cache: true,
      success: function(html){
        $('#info').html(html);
      }
    });
    $("*").removeClass('choice-active');
    $(this).addClass("choice-active");
    window.history.pushState(null,null,'author.html');
  });
  $('#bio').click(function(){
    $.ajax({
      url: 'ajax-content/bio.php',
      cache: true,
      success: function(html){
        $('#info').html(html);
      }
    });
    $("*").removeClass('choice-active');
    $(this).addClass("choice-active");
  });
  $('#edu').click(function(){
    $.ajax({
      url: 'ajax-content/edu.html',
      cache: true,
      success: function(html){
        $('#info').html(html);
      }
    });
    $("*").removeClass('choice-active');
    $(this).addClass("choice-active");
    window.history.pushState(null,null,'education.html');
  });
  $('#hobby').click(function(){
    $.ajax({
      url: 'ajax-content/hobby.html',
      cache: true,
      success: function(html){
        $('#info').html(html);
      }
    });
    $("*").removeClass('choice-active');
    $(this).addClass("choice-active");
    window.history.pushState(null,null,'hobby.html');
  });
}); 