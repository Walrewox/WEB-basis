<!DOCTYPE html>
<html lang="uk" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title><?php echo $title; ?></title>
    <link rel="stylesheet" href="assets/css/master.css">
    <script type="text/javascript" src="assets/js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="assets/js/time.js"></script>
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
                      'href' =>'music.php',
                      'title'=>'Музика']
                    ];
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

    <div class="wall" id="wall">
