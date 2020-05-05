window.addEventListener('popstate', (event) => {
  console.log("location: " + document.location + ", state: " + event.state);
  if (event.state == author) {
    $.ajax({
      url: 'ajax-content/author.html',
      success: function(html){
        $('#info').html(html);
      }
    });
    $("*").removeClass('choice-active');
    $(this).addClass("choice-active");
  }
});