var buttons = Array.from(document.getElementsByClassName('choice'));

function updateInfo(id){
  $.ajax({
    url: 'ajax-content/'+id+'.php',
    success: function(html){
      $('#info').html(html);

    }
  });
}

buttons.forEach(b => {
    let id = b.id;
    b.addEventListener('click', e => {
        $("*").removeClass('choice-active');
        $("#"+id).addClass("choice-active");
        updateInfo(id);
        history.pushState({id}, `Selected: ${id}`, `./selected=${id}`);
    });
});

window.addEventListener('popstate', e => {
    updateInfo(e.state.id);
});
