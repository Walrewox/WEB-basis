<?php 
  $title = "Книжна полиця";
  require('requires/head.php');?>
      <div class="choices_block">
        <div class="choice">
          <h1>Книжна полиця</h1>  
        </div>
        <div class="choice" id="fantasy">
          <input type="button" id="fantasy" value="Фентезі">
        </div>
        <div class="choice" id="adventure">
          <input type="button" id="adventure" value="Пригодницькі">
        </div>
        <div class="choice" id="sci-fi">
          <input type="button" id="sci-fi" value="Наукова фантастика">
        </div>
        <div class="choice" id="esoteric">
          <input type="button" id="esoteric" value="Езотерика">
        </div>
      </div>
      <div class="info_block" id="info">
        <h1 class="T-center">Натисніть на одну з кнопок зліва!</h1>
      </div>
<?php require('requires/foot.html') ?>