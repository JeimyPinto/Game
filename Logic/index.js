$(document).ready(function () {
    $("#btn_start").click(function () {
        const name = $("#input_name").val();
        if (name.trim() !== "") {
            window.location.replace(`../Pages/character.html?name=${name}`);
        } else {
            alert("Ingrese un nombre antes de continuar.");
        }
    });
});
