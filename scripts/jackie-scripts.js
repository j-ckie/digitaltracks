// solution: https://stackoverflow.com/questions/35347054/how-to-create-youtube-search-through-api
var apiKey = ["AIzaSyBBUotQvCorzLIWF8xQXUI6sZuDzyZOacU",
    "AIzaSyCmwi-9Qh215YAYaOcOdjZVdS51T7owlF4",
    "AIzaSyCDNiO3BCVoa97K2LuFSBO9Rtsf_FrkRug"
    ];
// var apiKey2 = "AIzaSyCmwi-9Qh215YAYaOcOdjZVdS51T7owlF4";
// var apiKey3 = "AIzaSyCDNiO3BCVoa97K2LuFSBO9Rtsf_FrkRug";

var movieArray = [
    ["The Good, the Bad and the Ugly", "AkQowzXG5W4"],
    ["The Godfather", "KlLRmK9RiNo"],
    ["For a Few Dollars More", "NrNyE4tD-BE"],
    ["A Fistful of Dollars", "fDGWrz3WBzU"],
    ["Hachi: A Dog's Tale", "qbOiYf_hkjs"],
    ["Scarface", "FmRi7qkNYQ"],
    ["The Graduate", "LfGL0a_pKz4"],
    ["The Big Lebowski", "s10ldVRHRSw"],
    ["Wall Street","o9gK2fOq4MY"],
    ["Day of Anger","w6y0OJh39s4"],
    ["Reservoir Dogs","uEAdvtuKyK8"],
    ["Rain Man","m3Z9V2q9xO0"],
    ["Once Upon a Time in the West","oiKtsOCP6Hc"],
    ["Once Upon a Time in America","_APmVdXm4Xw"],
    ["The Mission","J5qlWLXbfL4"],
    ["Drive","2m7XrMtOey8"],
    ["Twin Peaks","wDbSYAJ9Tvw"],
    ["Vertigo","Spx0NthRoVc"],
    ["The Intouchables","ymMYzb2HBsg"],
    ["Django Unchained","bRFojeMgA0U"],
    ["Casino","6jN_8mp-g78"],
    ["Stand by Me","Mx718Kdy83U"],
    ["Pulp Fiction","TnI7fcP_Pnk"],
    ["Groundhog Day","e7AbtNm-90I"],
    ["The Big Gundown","g70xK9QMi54"],
    ["In the Heat of the Night","LlZ97lhc8zc"],
    ["High Noon","-QLuyXofoYY"],
    ["Forrest Gump","RKLFSqVHoPc"],
    ["Companeros","81Nbo0iVGbU"],
    ["True Detective","p4zluA60hjs"],
    ["Meet Joe Black","gao05T_CqdE"],
    ["Beverly Hills Cop","5yT2tAVvLW8"],
    ["Dumb and Dumber","tZVD6_qqjzs"],
    ["Titanic","KfyxJtpvl7g"],
    ["Top Gun","3vo5Tp4iZzo"],
    ["Requiem for a Dream","yVIRcnlRKF8"],
    ["The Exorcist","I6Ffml1zUmE"],
    ["Zodiac","emNyJKWtK3E"],
    ["The X-Files","WM6alFy-GRo"],
    ["The Man with the Golden Arm","Hv0gi730q60"],
    ["Death Rides a Horse","Ff-kQ-UmflA"],
    ["Lock, Stock and Two Smoking Barrels","Bp5g5VbFFKo"],
    ["Singin' in the Rain","WZer-HMhiFI"],
    ["The Straight Story","ejNSERbhmCk"],
    ["Hang 'Em High","30xwZwLiXKs"],
    ["Eyes Wide Shut","CoZJdil0_HI"],
    ["Fallen Angels","ANIJoDzgBng"],
    ["Blood Simple","y7ExPByfFV4"],
    ["Hair","1ozWDPXADaw"],
    ["American Beauty","al21Vtlsg4A"],
    ["Ronin","seKrQOhJsB8"],
    ["Kickboxer 2: The Road Back","rFkxHDztTHw"],
    ["Farewell, My Lovely","4wYe5C6oNVo"],
    ["Desperado","U3E5_qbdSRI"],
    ["Johnny English","vapzbk7gmbc"],
    ["Psycho","is2sgWRK7D0"],
    ["Jackie Brown","NCAZS1H7CBI"],
    ["Mamma Mia!","0Tjlxpf06Gg"],
    ["Easy Rider","3hEfcawx6Fc"],
    ["Beverly Hills Cop II","eH0q7MG52wE"],
    ["Hawaii Five-O","oG6mGC8ZOF4"],
    ["Pirates of the Caribbean: The Curse of the Black Pearl","idzW8qSsjRI"],
    ["Taxi Driver","3rPs79nmGYE"],
    ["Magnolia","o00GKXWs__k"],
    ["The Last of the Mohicans","aVjwBNsiOv0"],
    ["8 Mile","N6PY0wkHE2U"],
    ["Harry Potter and the Sorcerer's Stone","OO_I6jLt-hg"],
    ["Gladiator","xbHPTPUpQ1I"],
    ["The Wizard of Oz","GPNbHmuf6zM"],
    ["Phantasm","s35BeVQzcq0"],
    ["Midnight Cowboy","1jjI0-qtFKU"],
    ["The Magnificent Seven","8XDB7GMnbUQ"],
    ["The Great Escape","v5w2lixqPZM"],
    ["Manhunter","kQ6zPdKlVP8"],
    ["The Thomas Crown Affair","y0Qy06ooHxI"],
    ["Rocky III","3RGX6OGOMj4"],
    ["My Sassy Girl","8v9JHLBsN8U"],
    ["Gunfight at the O.KCorral","ZqyiRwlLa80"],
    ["A View to a Kill","9TSx9_pn4ms"],
    ["Mulholland Drive","TGGoVD2bZPA"],
    ["The Third Man","2oEsWi88Qv0"],
    ["The Sting","4gAJE6HFQo0"],
    ["Elmer Gantry","jL6UGHLl3hk"],
    ["Kill Bill: Vol1","ToLai9BObiI"],
    ["Duck, You Sucker","t8DzB090GG4"],
    ["Trainspotting","iTFrCbQGyvM"],
    ["The Seventh Seal","Ztr1YWJrpa0"],
    ["Donnie Darko","ypS9xkI-788"],
    ["The Terminator","2Ci7wVW-Aik"],
    ["The Color of Money","l0XQwazkx10"],
    ["The Professional","g0Lg7ZmTFqs"],
    ["Crash","CATvcnpopWE"],
    ["In the Name of the Father","RFuEXXPw9A4"],
    ["O Brother, Where Art Thou?","0vFC9QhFvjw"],
    ["This is Spinal Tap","qAXzzHM8zLw"],
    ["Interstellar","DY8nqIfsQkU"],
    ["Inception","U5IailIzqdc"],
    ["Arrival","m5r_VW3gyHQ"],
    ["Dunkirk","iYZDynTpKSI"]
];


$(document).ready(function () {
    shuffleMovie(apiKey);

    hideResults();  
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
            
            // moviePoster += '<div style=background-image: + data.Poster + '"; > '


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
        key: apiKey[0], 
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
        key: apiKey[0], // API key - quota for one day is 10,000; resets nightly at 12am PST
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
//getVideo(movieArray[0][1]); 

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

function hideResults() {
    document.getElementById("return-results").style.display='none';
}

function revealResults() {
    document.getElementById("return-results").style.display='block';
}

function showResults(results) {
    var html = "";
    var entries = results.items;
    revealResults();
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
        var chosenMovie = movieArray.pop(); //chosenMovie[0] = title, chosenMovie[1] = video
        //example getVideo
        //getVideo("e9vl6h0yEUY")
        getVideo(chosenMovie[1]); //reference video ID
        //getRequest(chosenMovie.toString() + 'soundtrack'); 
        var randomMovieURL = "https://www.omdbapi.com/?apikey=dcf79638&t=" + chosenMovie[0]; //change chosenMovie to reference title
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
    revealResults();
    $.getJSON(randomMovieURL, randomMovieOptions, displayRandomMovies);
    });
});