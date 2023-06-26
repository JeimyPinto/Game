$(document).ready(function () {
    $("#btn_start").click(function () {
        const name = $("#input_name").val();
        if (name.trim() !== "") {
            window.location.replace(`../Pages/character.html?nickName=${nickName}`);
        } else {
            alert("Ingrese un nombre antes de continuar.");
        }
    });
});
