// Importar Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDoFt1Qru67Fjyule7RNrTSIvAQlTJbbTk",
    authDomain: "talkvi-b5abd.firebaseapp.com",
    projectId: "talkvi-b5abd",
    storageBucket: "talkvi-b5abd.appspot.com",
    messagingSenderId: "893696083503",
    appId: "1:893696083503:web:151011438465e08260a8da",
    measurementId: "G-E7TZFWQ0JM"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Manejadores de eventos para el registro
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Registro exitoso
            const user = userCredential.user;
            console.log("Usuario registrado:", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error en el registro:", errorCode, errorMessage);
        });
});

// Manejadores de eventos para el inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Inicio de sesión exitoso
            const user = userCredential.user;
            console.log("Usuario autenticado:", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error en el inicio de sesión:", errorCode, errorMessage);
        });
});

// Toggle entre formularios
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
