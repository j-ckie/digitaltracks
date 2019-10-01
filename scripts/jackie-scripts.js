// solution: https://stackoverflow.com/questions/35347054/how-to-create-youtube-search-through-api

$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm.toString() + 'soundtrack');
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
        key: 'AIzaSyCmwi-9Qh215YAYaOcOdjZVdS51T7owlF4',
        id: searchTerm
    };
  
    $.getJSON(url, params, showVideo);
}

//example getVideo
//getVideo("e9vl6h0yEUY"); 

function showVideo(results) {
    var html = "";
    var entries = results.items;

    console.log(results);
    $.each(entries, function (index, value) {

        var embedHtml = value.player.embedHtml;
        var videoLink = value.player;

        html += embedHtml;
        console.log(value);

    }); 
    
    $('#search-results').html(html);
    hideSearch()
}

function hideSearch() {
    document.getElementById("search-term").style.display='none';
}

function showResults(results) {
    var html = "";
    var entries = results.items;

    console.log(results.items); 

    $.each(entries, function (index, value) {
        getVideo(value.id.videoId);
        //var title = value.snippet.title;
        //var thumbnail = value.snippet.thumbnails.default.url;
        //html += '<p>' + title + '</p>';
        //html += '<img src="' + thumbnail + '">';
    }); 
    
    //$('#search-results').html(html);
}