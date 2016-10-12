/*********************************
 * open_load.js
 *
 * js for Embedding Openload video example site 
 *
 * Author: Simon Lee
 */
$(function () {
    $.ajax({
        url: "https://api.openload.co/1/file/listfolder?login={Your_login}&key={Your_Key}&folder={Your_Folder}",
        //Replace {Your_login}, {Your_Key}, {Your_Folder} with your information
        datatype: "jsonp",
        success: renderMovies2

    });
});
function renderMovies2(movies) {

    var ul = $("#movies2");
    ul.empty();
    console.log(movies.result.files);
    for (var m in movies.result.files) {
        var movie = movies.result.files[m];
        console.log(movie.link);
        var title = String(movie.name);
        //Just for naming for display
        var selector = "\"#" + title.substring(0, 3) + "\"";
        console.log(selector);
        console.log(title);
        var li = $("<li>", { id: title.substring(0, 3) }).append(String(movie.name).substring(3));
        var li2 = $("<p>").append(String(movie.name).substring(7));
        ul.append(li);
        ul.append(li2);
        var linkextid = movie.linkextid;
        $("#movies2").click(function () {
            $("#player").html("<iframe src=\"https://openload.co/embed/"+ linkextid +"/\" scrolling=\"no\" frameborder=\"0\" width=\"80%\" height=\"80%\" allowfullscreen=\"true\" webkitallowfullscreen=\"true\" mozallowfullscreen=\"true\"></iframe>");
        });
       
    }
}