window.addEventListener('popstate', (event) => {
  console.log("location: " + document.location + ", state: " + event.state);
  switch (event.state) {
    case 'author':
      $.ajax({
        url: 'ajax-content/author.html',
        success: function(html){
          $('#info').html(html);
        }
      });
      $("*").removeClass('choice-active');
      $('#author').addClass("choice-active");
      break;
    case 'biography':
      $.ajax({
        url: 'ajax-content/bio.php',
        success: function(html){
          $('#info').html(html);
        }
      });
      $("*").removeClass('choice-active');
      $('#bio').addClass("choice-active");
      break;
    case 'education':
      $.ajax({
        url: 'ajax-content/edu.html',
        success: function(html){
          $('#info').html(html);
        }
      });
      $("*").removeClass('choice-active');
      $('#edu').addClass("choice-active");
      break;
    case 'hobby':
      $.ajax({
        url: 'ajax-content/hobby.html',
        success: function(html){
          $('#info').html(html);
        }
      });
      $("*").removeClass('choice-active');
      $('#hobby').addClass("choice-active");
      break;
  }
});
