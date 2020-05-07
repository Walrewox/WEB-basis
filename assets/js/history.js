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
  if(event.state == 'bio') content('ajax-content/index/bio.php','#bio');
  else content('ajax-content/index/'+event.state+'.html','#'+event.state);
});
