function revealMessage() {
    const input = document.querySelector('.secret-message input').value;
    const secret = document.getElementById("secret");
    const password = "07/08/2024";  // Aquí defines la contraseña
    const message = "Nuestra fecha de aniversario JKSKJS MUAAA TE AMO CON TODA MI ALMA Y CORAZON TE AMO TE AMO TE AMO TE AMO TANTO MI CIELITO LINDO MUAAAA";  // Aquí defines el mensaje que quieres revelar

    if (input === password) {
        secret.textContent = message;
        secret.style.color = "#ff69b4";
        secret.style.fontFamily = "'Dancing Script', cursive";
    } else {
        secret.textContent = "Código incorrecto.";
        secret.style.color = "red";
    }
}