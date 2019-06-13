$(document).ready(() => {

    $("#list-items").html(localStorage.getItem("listItem"))
    $(".add-items").submit((event) => {
        event.preventDefault();

        //prendo l 'input
        var item = $("#todo-list-item").val();
        //costruisco  l' istruzione condizionale 

        if (item) {
            $("#list-items").append("<li><input type='checkbox'/>" + item + "<a class='remove'>x</a><hr> </li").hide().fadeIn(2000);
            localStorage.setItem("listItems", $("#list-items").html())
            $("#todo-list-item").val("");

        }


    });
    //eseguo il codice di sotto perchè ho creato in via dinamica il checkbox
    $(document).on("change", ".checkbox", function () {
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked");
        } else {
            $(this).attr("checked", "checked");
        }
        console.log("remove!");
        $(this).parent().toggleClass("completed");
    });
    $(document).on("click", ".remove", function () {
        console.log("remove!");
        $(this).parent().fadeOut("slow", () => {
            $(this).parent().remove()
        })

    });
});