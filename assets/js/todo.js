// check off specific Todos y clicking
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

// click on X to delte Todos
$('ul').on('click', 'span', function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
})

// selecting the input

$("input[type='text'").keypress(function (e) {
    if (e.which === 13) {
        // grabbing new Todo Text ferom the input
        var TodoText = $(this).val();
        $(this).val('');
        // create a new li and add to ul
        $('ul').append("<li><span class='icon-cancel'>X</span> " + TodoText + "</li>")
    }
});

$('#icon-plus').click(function () {
    $("input[type='text'").fadeToggle(500);
})