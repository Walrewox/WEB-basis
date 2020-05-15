<?php
  $title = "Головна";
  require('requires/head.php');
  $navigation = [[
                    'href' => '/author/',
                    'title'=> 'Автор',
                    'id' => 'author'
                  ],
                  [
                    'href' => '/bio/',
                    'title'=> 'Надихаючі особистості',
                    'id' => 'bio'
                  ],
                  [
                    'href' =>'/edu/',
                    'title'=>'Освіта',
                    'id' => 'edu'
                  ],
                  [
                    'href' =>'/hobby/',
                    'title'=>'Хобі',
                    'id' => 'hobby'
                  ]
                  ];
                  shuffle($navigation);
?>
      <div class="choices_block">
        <div class="choice">
          <h1>Головна сторінка</h1>
        </div>
        <nav>
          <?php foreach ($navigation as $link) {
              echo "<div class = \"choice\" id=\"{$link['id']}\">";
              echo "<li><a href=\"{$link['href']}\"> {$link['title']} </a></li>\n";
              echo "</div>";
              }
          ?>
        </nav>
        <!-- <div class="choice" id="author">
          <input type="button" id="author" value="Автор">
        </div>
        <div class="choice" id="bio">
          <input type="button" id="bio" value="Надихаючі особистості">
        </div>
        <div class="choice" id="edu">
          <input type="button" id="edu" value="Освіта">
        </div>
        <div class="choice" id="hobby">
          <input type="button" id="hobby" value="Хобі">
        </div> -->
      </div>
      <div class="info_block" id="info">
        <h1 class="T-center">Натисніть на одну з кнопок зліва!</h1>
      </div>
<?php require('requires/foot.html') ?>
