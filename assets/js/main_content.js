let linkButtons = Array.from(document.getElementsByClassName('choice'));

function selectButton(id){
  linkButtons.forEach(
    b => {b.classList.toggle(choiceActive)}
  );
}

$(document).ready(function(){
  $('nav li a').click(function(e) {
             e.preventDefault();
             var href = $(this).attr("href");

              $.ajax({
                url: href,
                type: GET,
                success: function(html){
                    $('#info').html(html);
                }
              });

            history.pushState('', 'New URL: '+href, href);

  });
  });
  // $('#author').click(function(){
  //   $.ajax({
  //     url: 'ajax-content/index/author.html',
  //     success: function(html){
  //       $('#info').html(html);
  //     }
  //   });
  //   $("*").removeClass('choice-active');
  //   $(this).addClass("choice-active");
  //
  //   window.history.pushState({content:author},null,'/index/author');
  // });
  // $('#bio').click(function(){
  //   $.ajax({
  //     url: 'ajax-content/index/bio.php',
  //     success: function(html){
  //       $('#info').html(html);
  //     }
  //   });
  //   $("*").removeClass('choice-active');
  //   $(this).addClass("choice-active");
  //
  //   window.history.pushState({content:bio},null,'/index/bio');
  // });
  // $('#edu').click(function(){
  //   $.ajax({
  //     url: 'ajax-content/index/edu.html',
  //     success: function(html){
  //       $('#info').html(html);
  //     }
  //   });
  //   $("*").removeClass('choice-active');
  //   $(this).addClass("choice-active");
  //
  //   window.history.pushState({content:edu},null,'/index/edu');
  // });
  // $('#hobby').click(function(){
  //   $.ajax({
  //     url: 'ajax-content/index/hobby.html',
  //     success: function(html){
  //       $('#info').html(html);
  //     }
  //   });
  //   $("*").removeClass('choice-active');
  //   $(this).addClass("choice-active");
  //
  //   window.history.pushState({content:hobby},null,'/index/hobby');
  // });
