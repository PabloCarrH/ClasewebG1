document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("Inicio de sesión exitoso");
        window.location.href = "index.html";
    }
});
/*Script Register*/

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Por favor, intenta de nuevo.");
    } else {
        alert("Registro exitoso");
        window.location.href = "index.html"; // Reemplazar con la página de redirección
    }
});
