# Project02 Ian Wehmeyer
Project 02 - making API search work

This is my project. I'm planning on building an API search engine with giphy. 

My understanding of CSS and SASS / SCSS is low - I have low expectations for this side of the project. If I can get the search engine to run I will be happy.


User stories

1. I want to be able to search for gifs. 

2. I want to be able to save gifs to my desktop via search.

http://api.giphy.com/v1/gifs/search?q=turkey&api_key=RpB7riiXhTfwsvrmz6bH959b3JNBb3mf 

need to make api key hidden field "RpB7riiXhTfwsvrmz6bH959b3JNBb3mf "



id http://media1.giphy.com/media/126NMCvhKJfNN6/giphy.gif

https://media0.giphy.com/media/126NMCvhKJfNN6/200_d.gif?cid=00ff238c6ef47c606332444be610629ec349dc9240c46c4f&rid=200_d.gif


This is the solution Giphy shows
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
xhr.done(function(data) { console.log("success got data", data); });

$('#submit').click(()=>{
                let userInput = $('#search').val()
                //alert('userInput')
                $.ajax({
                url:'http://api.giphy.com/v1/gifs/search?q=' + {userInput} + '&api_key=RpB7riiXhTfwsvrmz6bH959b3JNBb3mf'
            });
               
                });
            
            });