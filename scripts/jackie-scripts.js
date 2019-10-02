// solution: https://stackoverflow.com/questions/35347054/how-to-create-youtube-search-through-api

$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm.toString() + 'soundtrack');

        var movieURL = "https://www.omdbapi.com/?apikey=dcf79638&t=" + searchTerm;
        var movieOptions = {
            s: "",
        }
        // John was here
    function displayMovies(data) {
            console.log(data);
            console.log(data.Title);
            console.log(data.Genre);
            console.log(data.Runtime);
            console.log(data.Plot);
            var movieHTML = '<ul>';
            movieHTML += '<img ';
            movieHTML += 'src="' + data.Poster + '" ';
            movieHTML += 'alt="' + data.Title + '" >';
            movieHTML += '</li>';
            movieHTML += '<li>' + data.Title + "</li>";
            movieHTML += '<li>' + data.Genre + "</li>";
            movieHTML += '<li>' + data.Runtime + "</li>";
            movieHTML += '<li>' + data.Plot + "</li>";
            
            $('#imdb-results').html(movieHTML);
        }  
    $.getJSON(movieURL, movieOptions, displayMovies);
    });
});

function getRequest(searchTerm) {
    var url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: 'AIzaSyCmwi-9Qh215YAYaOcOdjZVdS51T7owlF4', 
        q: searchTerm,
        type: 'video',
        maxResults: '1'
    };
  
    $.getJSON(url, params, showResults);
}

function getVideo(searchTerm) {
    var url = 'https://www.googleapis.com/youtube/v3/videos';
    var params = {
        part: 'player',
        key: 'AIzaSyCmwi-9Qh215YAYaOcOdjZVdS51T7owlF4', // API key - quota for one day is 10,000; resets nightly at 12am PST
        id: searchTerm
    };
  
    $.getJSON(url, params, showVideo);
}

//example getVideo
//getVideo("e9vl6h0yEUY"); 

function showVideo(results) {
    var html = "";
    var entries = results.items;

    // console.log(results);
    $.each(entries, function (index, value) {

        var embedHtml = value.player.embedHtml;
        var videoLink = value.player;

        html += embedHtml;
        // console.log(value);

    }); 
    
    $('#search-results').html(html);
    hideSearch()
}

function hideSearch() {
    document.getElementById("search-term").style.display='none';
    document.getElementById("main").style.display='none'; // hides the container on the html on search
}

function showResults(results) {
    var html = "";
    var entries = results.items;
    $.each(entries, function (index, value) {
        getVideo(value.id.videoId);
    }); 
}