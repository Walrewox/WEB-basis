<!DOCTYPE html>
<html lang="uk" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Домашня сторінка</title>
    <link rel="stylesheet" href="/css/master.css">
    <script type="text/javascript" src="/js/jquery-3.4.1.min.js"></script>
  </head>
  <body>
    <?php $links = [[
                      'href' => 'index.php',
                      'title'=> 'Головна'
                    ], 
                    [
                      'href' => 'bookshelf.php',
                      'title'=> 'Книжна полиця'
                    ],
                    [ 
                      'href' => 'games.php',
                      'title'=> 'Ігри'
                    ],
                    [ 
                      'href' =>'music.php',
                      'title'=>'Музика']
                    ];
          $quotes = ['img/quote1.jpeg',
                     'img/quote2.jpg',
                     'img/quote3.jpg']; 
          $colors = ["#ff0000", "#00ff00", "#0000ff"]; 
          shuffle($links);
     ?>
    <nav class="menu">
      <ul>
        <?php foreach ($links as $link) {
            echo "<li><a href=\"{$link['href']}\"> {$link['title']} </a></li>\n";
              }
              echo "<li><a id=\"time\">"."Поточна дата та час:".date('d.m.Y H:i')."</a></li>";
              echo "<li><a>"."Ваш IP:".$_SERVER['REMOTE_ADDR']."</a></li>";
        ?>
      </ul>
    </nav>
    
    <div class="wall">
      <div class="choices_block">
        <div class="choice">
          <h1>Оберіть, що вам цікаво!</h1>  
        </div>
        <div class="choice">
          <input type="button" id="bio" value="Біографія">
        </div>
        <a id="bio" href="#">Біографія</a>
      </div>
      
      <div class="info_block" id="info">
        <h1 class="T-center">Натисніть на одну з кнопок зліва!</h1>
      </div>
    </div>
    
    <footer class="menu"> 
      <ul>
        <li><a>Copyright © Walrewox</a></li>
        <li><a>Contact email: saske.pawlyuk2012@gmail.com</a></li>
      </ul>
    </footer>
    <script>  
      $(document).ready(function(){
        
        $('#bio').click(function(){
          $.ajax({
            url: 'bio.php',
            cache: false,
            success: function(html){
              $("#info").html(html);
            }
          });
        });
      });  
    </script> 
  </body>
</html>
