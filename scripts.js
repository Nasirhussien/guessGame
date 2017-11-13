$( document ).ready(function() {
    var randomNumber = Math.floor(Math.random() * 10) + 1
    console.log(randomNumber)
    console.log( "working!" );
    $('#submitButton').on('click',function(){
         var numberGuess= $('#input').val()
         if (numberGuess == randomNumber){
             $('#resultBox').append('<p> good job </p>')
             $('body').css('background-color', 'green') ; 
             }
        else if(numberGuess < randomNumber){ $('#resultBox').append('<p>higher</p>')
             $('body').css('background-color','orange')
         }
          else if (numberGuess > randomNumber ){$('#resultBox').append('<p> lower</p>')

          }

    })
});

