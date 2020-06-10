let linkButtons = Array.from(document.getElementsByClassName('choice'));

function selectButton(id){
  linkButtons.forEach(
    butt => {
      butt.classList.toggle(choiceActive,butt.id === id)
    }
  );
}

$(document).ready(function(){
  $('nav li a').click(function() {
             var href = $(this).attr("href");
             var title = $(this).
             $.ajax({
                url: "ajax-content"+href,
                success: function(html){
                    $('#info').html(html);
                }
              });
            history.pushState('', 'New URL: '+href, href);
  });
});
