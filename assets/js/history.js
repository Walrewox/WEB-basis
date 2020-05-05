function content(url,button){
  $.ajax({
    url: url,
    success: function(html){
      $('#info').html(html);
    }
  });
  $("*").removeClass('choice-active');
  $(button).addClass("choice-active");
}
window.addEventListener('popstate', (event) => {
  console.log("location: " + document.location + ", state: " + event.state);
  switch (event.state) {
    case 'author':
      content('ajax-content/author.html','#author');
      break;
    case 'biography':
      content('ajax-content/bio.php','#bio')
      break;
    case 'education':
      content('ajax-content/edu.html','#edu');
      break;
    case 'hobby':
      content('ajax-content/hobby.html','#hobby');
      break;
  }
});
