$(document).ready(function () {
    $("#readme").click(function () {
        $(".myself").show(6000);
        $(".technical-skils").show(6500);
        $(".experience").show(7000);
        $(".projects").show(7500);
        $(".strengths").show(8000);
        $(".online-presence").show(8500);
        $("#close").show(9000);
    });

    $("#close").click(function () {
        $(".introduce").hide(9000);
    });
});
