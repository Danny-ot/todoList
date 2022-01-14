$(document).ready(function () {


    $("#form").submit(function (event) {
        event.preventDefault();
        const whatTodo = $("#tobedone").val();
        const duedate = $("#duedate").val();
        const selectedOption = $("#select").find(":selected").text()

        if (whatTodo === "" || duedate === "" || selectedOption === "") {
            $("#warn").show();
        } else {
            $("#warn").hide();
            $(".display").append("<li class = 'list-tasks'><div class = 'task-div'> <span>" + whatTodo + "</span><p><b>" + selectedOption + "</b><br><b>Due date: </b>" + duedate + "</p></div></li>")
        }
        $(".list-tasks").click(function () {
            $(this).remove();
        })
    })

})