$(document).ready(function(){
    //I think I have to reference the button first
    $("#submit").on('click', function(e) {
        e.preventDefault();

            //supposedly this will store the text from search id under query

        let query = $('#q').val();
        let data = $('#searchform').serializeArray();
        let url = 'http://api.giphy.com/v1/gifs/search';
        //let url = 'http://api.giphy.com/v1/gifs/search?q='+query+'&api_key=dc6zaTOxFJmzC';

        //I think console.log might be necessary next. When tested I do show the URL in the console log!!!

        if(query !== ""){

            //I got the if else code from a forum. Want to use it to make sure the user has to enter data. Might end up deleting, may be too early to toy with stuff like this. 
            
            /*$.ajax({

                
                beforeSend: function(){
                    $('#spinner').show(); //per my neighbor - this can make it so my spinner shows up while my page loads
                },

                complete: function(){
                    $('#spinner').hide();
                },

                success: function(Gifs){
                    let output = ''
                    let latestGifs = Gifs.latest;
                    console.log ('latestGifs=' + latestGifs)

                    
                },

                
            });*/
            $.ajax({
                url:url,
                method: "get",
                dataType: 'json', //don't know if the data is json or if I have to reference it but trying anyways.
                data: data, 
                success: function(data){
                    console.log('got here')
                    var output = ''
                    $.each(data.data, function(key, obj){
                        //console.log('inside each')
                        var url = obj.images.original.url;
                        var img = "<img src='"+url+"'/>\n";
                        
                        output+=img
                    });
                    console.log(output);
                    $('#outputarea').html(output)   
                },
                error: function(){
                    alert('error');
                }
            });
        }
        else{
            console.log('enter data')
        }

    });


});