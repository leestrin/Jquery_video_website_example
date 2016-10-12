/*********************************
 * daily.js
 *
 * js for Embedding Daily motion video example site 
 *
 * Author: Simon Lee
 */
$(function () {
    $.ajax({
        url: "https://api.dailymotion.com/user/{Your_Id}/videos&limit=10",
        //Replace {Your_Id} with your ID
        datatype: "jsonp",
        success: renderMovies

    });
});
function renderMovies(movies) {

    var ul = $("#movies");
    ul.empty();
    console.log(movies.list);
    for (var m in movies.list) {
        var movie = movies.list[m];
        console.log(movie);
        var title = movie.title;
        console.log(title);
        var li = $("<li>").append(String(movie.title).substring(3));
        var li2 = $("<p>").append(String(movie.title).substring(7));
        ul.append(li);
        ul.append(li2);
        $("#movies").click(function () {
            $("#player").html("<iframe frameborder=\"0\" width=\"80%\" height=\"80%\" src=\"http://www.dailymotion.com/embed/video/" + movie.id + "\" allowfullscreen></iframe>");
        });
    }
}