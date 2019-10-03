// solution: https://stackoverflow.com/questions/35347054/how-to-create-youtube-search-through-api
var apiKey = "AIzaSyBBUotQvCorzLIWF8xQXUI6sZuDzyZOacU";
var apiKey2 = "AIzaSyCmwi-9Qh215YAYaOcOdjZVdS51T7owlF4";

var movieArray = [
    "The Good, the Bad and the Ugly",
    "The Godfather",
    "DrNo",
    "For a Few Dollars More",
    "A Fistful of Dollars",
    "Werckmeister Harmonies",
    "Hachi: A Dog's Tale",
    "Scarface",
    "The Graduate",
    "The Big Lebowski",
    "Wall Street",
    "Day of Anger",
    "Reservoir Dogs",
    "Rain Man",
    "Once Upon a Time in the West",
    "Once Upon a Time in America",
    "The Mission",
    "Drive",
    "Twin Peaks",
    "Vertigo",
    "The Intouchables",
    "Django Unchained",
    "Casino",
    "Stand by Me",
    "Pulp Fiction",
    "Groundhog Day",
    "The Big Gundown",
    "In the Heat of the Night",
    "High Noon",
    "Forrest Gump",
    "Companeros",
    "True Detective",
    "Meet Joe Black",
    "Beverly Hills Cop",
    "Dumb and Dumber",
    "Titanic",
    "Top Gun",
    "Mean Streets",
    "Requiem for a Dream",
    "The Exorcist",
    "Zodiac",
    "The X-Files",
    "The Man with the Golden Arm",
    "Death Rides a Horse",
    "Lock, Stock and Two Smoking Barrels",
    "Singin' in the Rain",
    "The Straight Story",
    "Hang 'Em High",
    "Eyes Wide Shut",
    "Fallen Angels",
    "Blood Simple",
    "Hair",
    "American Beauty",
    "Ronin",
    "Kickboxer 2: The Road Back",
    "Farewell, My Lovely",
    "Desperado",
    "Johnny English",
    "Psycho",
    "Jackie Brown",
    "Mamma Mia!",
    "Easy Rider",
    "Beverly Hills Cop II",
    "Hawaii Five-O",
    "Pirates of the Caribbean: The Curse of the Black Pearl",
    "Taxi Driver",
    "Magnolia",
    "The Last of the Mohicans",
    "8 Mile",
    "Harry Potter and the Sorcerer's Stone",
    "Gladiator",
    "The Wizard of Oz",
    "Phantasm",
    "Midnight Cowboy",
    "The Magnificent Seven",
    "The Great Escape",
    "Manhunter",
    "The Thomas Crown Affair",
    "Rocky III",
    "My Sassy Girl",
    "Gunfight at the O.KCorral",
    "A View to a Kill",
    "Mulholland Drive",
    "The Third Man",
    "The Sting",
    "Elmer Gantry",
    "Kill Bill: Vol1",
    "Duck, You Sucker",
    "Trainspotting",
    "The Seventh Seal",
    "Donnie Darko",
    "The Terminator",
    "The Color of Money",
    "The Professional",
    "Crash",
    "In the Name of the Father",
    "O Brother, Where Art Thou?",
    "This is Spinal Tap",
    "Interstellar",
    "Inception",
    "Arrival",
    "Dunkirk"
];


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
            var moviePoster = '<div>'
            var movieHTML = '<ul>';
            moviePoster += '<img ';
            moviePoster += 'src="' + data.Poster + '" ';
            moviePoster += 'alt="' + data.Title + '" >';
            movieHTML += '</div>';
            movieHTML += '<h1>' + data.Title + "</h1>";
            movieHTML += '<li>' + data.Rated + '</li>';
            movieHTML += '<li>' + data.Genre + "</li>";
            movieHTML += '<li>' + data.Runtime + "</li>";
            movieHTML += '<button type="button" onclick="refreshPage()">Lookup another movie</button>';
            movieHTML += '<li>' + data.Plot + "</li>";
            
            
            $('#poster-results').html(moviePoster);
            $('#imdb-results').html(movieHTML);
        }  
    $.getJSON(movieURL, movieOptions, displayMovies);
    });
});

function getRequest(searchTerm) {
    var url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: apiKey2, 
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
        key: apiKey2, // API key - quota for one day is 10,000; resets nightly at 12am PST
        id: searchTerm,
        "status": {
            "uploadStatus": "processed",
            "privacyStatus": "public",
            "license": "youtube",
            "embeddable": true,
            "publicStatsViewable": true
        }
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
    hideSearch();
}

function hideSearch() {
    document.getElementById("search-term").style.display='none';
    document.getElementById("slideshow").style.display='none'; // hides the container on the html on search
    document.getElementById("search").style.display='none';
}

function showResults(results) {
    var html = "";
    var entries = results.items;
    $.each(entries, function (index, value) {
        getVideo(value.id.videoId);
    }); 
}

function refreshPage() {
    location.reload();
}



// stuff to shuffle movie array
function shuffleMovie(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// random movie button logic
$(document).ready(function () {
    $('#movieRandom').click(function (event) {
        event.preventDefault();
        shuffleMovie(movieArray);
        var chosenMovie = movieArray.pop();
        getRequest(chosenMovie.toString() + 'soundtrack');
        var randomMovieURL = "https://www.omdbapi.com/?apikey=dcf79638&t=" + chosenMovie;
        var randomMovieOptions = {
            s: "",
        }

        function displayRandomMovies(data) {
            console.log(data);
            console.log(data.Title);
            console.log(data.Genre);
            console.log(data.Runtime);
            console.log(data.Plot);
            var randomMoviePoster = '<div>';
            var randomMovieHTML = '<ul>';
            randomMoviePoster += '<img ';
            randomMoviePoster += 'src="' + data.Poster + '" ';
            randomMoviePoster += 'alt="' + data.Title + '" >';
            randomMovieHTML += '</div>';
            randomMovieHTML += '<h1>' + data.Title + "</h1>";
            randomMovieHTML += '<li>' + data.Rated + '</li>';
            randomMovieHTML += '<li>' + data.Genre + "</li>";
            randomMovieHTML += '<li>' + data.Runtime + "</li>";
            randomMovieHTML += '<button type="button" onclick="refreshPage()">Lookup another movie</button>';
            randomMovieHTML += '<li>' + data.Plot + "</li>";

            $('#poster-results').html(randomMoviePoster);
            $('#imdb-results').html(randomMovieHTML);
        }
    $.getJSON(randomMovieURL, randomMovieOptions, displayRandomMovies);
    });
});