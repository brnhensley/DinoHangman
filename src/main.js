import { DinoHangman } from './dino-hangman.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  // let dinoHangman;
  $('#wordGenerator').click(function() {
    let dinoHangman = new DinoHangman();
    // let word = dinoHangman.wordGenerator();
    // console.log(dinoHangman.word);
    $("wordHidden").text(dinoHangman.word);
  });
});
