$(document).ready(function(){
  $('#author').click(function(){
    $.ajax({
      url: 'ajax-content/author.php',
      cache: false,
      success: function(html){
        $('#info').html(html);
      }
    });
    $('#bio').removeClass('choice-active');
    $('#edu').removeClass('choice-active');
    $(this).addClass("choice-active");
  });
  $('#bio').click(function(){
    $.ajax({
      url: 'ajax-content/bio.php',
      cache: false,
      success: function(html){
        $('#info').html(html);
      }
    });
    $('#author').removeClass('choice-active');
    $('#edu').removeClass('choice-active');
    $(this).addClass("choice-active");
  });
  $('#edu').click(function(){
    $.ajax({
      url: 'ajax-content/edu.php',
      cache: false,
      success: function(html){
        $('#info').html(html);
      }
    });
    $('#author').removeClass('choice-active');
    $('#bio').removeClass('choice-active');
    $(this).addClass("choice-active");
  });
}); 