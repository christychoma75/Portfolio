// line through specific Todo by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//click on tX to delete Todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function (event) {
    if (event.which === 13) {
        //taking new todo text from input
        var todoText = $(this).val();
        $(this).val("");

        //create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }

});
$(".fa-check-circle").click(function () {
    $("input[type='text'").fadeToggle();
});