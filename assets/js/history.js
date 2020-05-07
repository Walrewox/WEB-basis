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
      content('ajax-content/index/author.html','#author');
      break;
    case 'biography':
      content('ajax-content/index/bio.php','#bio')
      break;
    case 'education':
      content('ajax-content/index/edu.html','#edu');
      break;
    case 'hobby':
      content('ajax-content/index/hobby.html','#hobby');
      break;
  }
});
