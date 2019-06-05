import $ from 'jquery';

export class DinoHangman
{
  constructor()
  {
    this.test = "";
    this.word = this.wordGenerator(this.test);
    console.log("I WORK", this.test);
  }

  wordGenerator(test)
  {
    let pop = this;
    return $.ajax({
      url: `http://dinoipsum.herokuapp.com/api/?paragraphs=1&words=1&format=json`,
      // type: 'GET',
      // data: {
      //   format: 'json'
      // },
      success: function(response) {
        $("#wordHidden").text("WORKS.");
        test = response[0][0];
        pop.test = test;
        console.log(pop.test);
        //let ass = JSON.parse(response[0][0]]);
        //console.log(ass);
      },
      error: function() {
        $("#errors").text("There was a problem generating your word. Try again.");
      }
    });

  }

}
