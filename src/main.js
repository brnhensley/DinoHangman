// import { ClassName } from './class-name.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#wordGenerator').click(function(event) {
    event.preventDefault();
    let words = $('#words').val();
    $('#words').val("");
    $.ajax({
      url: `http://dinoipsum.herokuapp.com/api/?paragraphs=1&words=1`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#wordGuess').text(`${response}`);
        console.log(response);
      },
      error: function() {
        $('#errors').text("There was a problem generating your word. Try again.");
      }
    });
  });
});
