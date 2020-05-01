<?php 
  $title = "Музика";
  require('requires/head.php');?>
      <div class="choices_block">
        <div class="choice">
          <h1>Музика</h1>  
        </div>
        <div class="choice" id="pop">
          <input type="button" id="pop" value="Популярна">
        </div>
        <div class="choice" id="rock">
          <input type="button" id="rock" value="Рок">
        </div>
        <div class="choice" id="j-music">
          <input type="button" id="j-music" value="Японська">
        </div>
        <div class="choice" id="classic">
          <input type="button" id="classic" value="Класична">
        </div>
      </div>
      <div class="info_block" id="info">
        <h1 class="T-center">Натисніть на одну з кнопок зліва!</h1>
      </div>
<?php require('requires/foot.html') ?>