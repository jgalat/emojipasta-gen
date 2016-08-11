<?php

  require '../php/WordChain.php';

  $length = isset($_GET['len']) ? $_GET['len'] : 50;
  $order = isset($_GET['order']) ? $_GET['order'] : 2;
  $theme = isset($_GET['theme']) ? $_GET['theme'] : null;

  $text = file_get_contents("../corpus.txt");
  $markov = new MarkovPHP\WordChain($text, $order);

  $emojipasta = $markov->generate($length, $theme);
  if (isset($_GET['json'])){
    echo '"' . addslashes($emojipasta) . '"';
  } else {
    echo $emojipasta;
  }



?>
