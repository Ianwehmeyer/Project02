$(document).ready(function(){
    //I think I have to reference the button first
    $("#submit").on('click', function(e) {
        e.preventDefault();

            //supposedly this will store the text from search id under query

        let query = $('#search').val();
        let url = 'http://api.giphy.com/v1/gifs/search?q='+query+'&api_key=dc6zaTOxFJmzC';

        //I think console.log might be necessary next. When tested I do show the URL in the console log!!!

        console.log(url);


    });


});