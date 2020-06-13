let buttons = Array.from(document.getElementsByClassName('choice'));

function updateInfo(id){
  $.ajax({
    url: 'ajax-content/index/author.html',
    success: function(html){
      $('#info').html(html);
    }
  });
}

buttons.forEach(b => {
    let id = b.id;
    console.log(id)
    b.addEventListener('click', e => {
        history.pushState({id}, `Selected: ${id}`, `./selected=${id}`)
        $("*").removeClass('choice-active');
        $(id).addClass("choice-active");
        updateInfo(id);
    });
});

window.addEventListener('popstate', e => {
    selectBox(e.state.id);
});

// $(document).ready(function(){
//   $('#author').click(function(){
//     $.ajax({
//       url: 'ajax-content/index/author.html',
//       success: function(html){
//         $('#info').html(html);
//       }
//     });
//     $("*").removeClass('choice-active');
//     $(this).addClass("choice-active");
//
//     window.history.pushState('author',null,'author');
//   });
//   $('#bio').click(function(){
//     $.ajax({
//       url: 'ajax-content/index/bio.php',
//       success: function(html){
//         $('#info').html(html);
//       }
//     });
//     $("*").removeClass('choice-active');
//     $(this).addClass("choice-active");
//
//     window.history.pushState('bio',null,'bio');
//   });
//   $('#edu').click(function(){
//     $.ajax({
//       url: 'ajax-content/index/edu.html',
//       success: function(html){
//         $('#info').html(html);
//       }
//     });
//     $("*").removeClass('choice-active');
//     $(this).addClass("choice-active");
//
//     window.history.pushState('edu',null,'edu');
//   });
//   $('#hobby').click(function(){
//     $.ajax({
//       url: 'ajax-content/index/hobby.html',
//       success: function(html){
//         $('#info').html(html);
//       }
//     });
//     $("*").removeClass('choice-active');
//     $(this).addClass("choice-active");
//
//     window.history.pushState('hobby',null,'hobby');
//   });
// });
