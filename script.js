$(document).ready(function () {
    $("#clickme").click(function () {
        $("#clickme").hide(1200)
        $("#section2-paragraph-show").hide(2450)
        $("#closeme").show(2400)
        $("#section2-paragraph").show(2500)
    })
    $("#closeme").click(function () {
        $("#clickme").show(2400)
        $("#section2-paragraph-show").show(2450)
        // $("#closeme").hide(2400)
        $("#section2-paragraph").hide(2500)
    })

    // section-4-content//
    $("#click").click(function () {
        let wondar = $(".wondar-day");
        if (wondar.is(":visible")) {
           /* wondar.hide(); // hides */
        } else {
            wondar.css("display", "flex"); // shows as flex
        }

    });
    $("#close").click(function () {
        $(".wondar-day").hide(2800)
    })

})