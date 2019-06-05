import $ from 'jquery';

export class DinoHangman
{
  constructor()
  {
    this.word = this.wordGenerator()
    console.log(this.word);
  }

  wordGenerator()
  {
    return $.ajax({
      url: `http://dinoipsum.herokuapp.com/api/?paragraphs=1&words=1`,
      type: 'GET',
      data: {
        format: 'json'
      },
        success: function(response) {
        let word = response[0][0];
        console.log(word);
        return response[0][0];
      },
      error: function() {
        $("#errors").text("There was a problem generating your word. Try again.");
      }
      // console.log(ajax.data.format);
      // return data.format.;
    });
  }

}


// $("#wordHidden").text(`${response}`);
