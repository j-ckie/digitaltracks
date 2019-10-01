// solution: https://stackoverflow.com/questions/35347054/how-to-create-youtube-search-through-api
$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm + 'soundtrack');
    });
});

function getRequest(searchTerm) {
    var url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: 'AIzaSyCmwi-9Qh215YAYaOcOdjZVdS51T7owlF4',
        q: searchTerm
    };
  
    $.getJSON(url, params, showResults);
}

function showResults(results) {
    var html = "";
    var entries = results.items;
    
    $.each(entries, function (index, value) {
        var title = value.snippet.title;
        var thumbnail = value.snippet.thumbnails.default.url;
        html += '<p>' + title + '</p>';
        html += '<img src="' + thumbnail + '">';
    }); 
    
    $('#search-results').html(html);
    hideSearch()
}

function hideSearch() {
    document.getElementById("search-term").style.display='none';
}