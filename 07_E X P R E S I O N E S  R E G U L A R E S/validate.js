const validateDni = (dni) => {
    const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET'
    const nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i
    const nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i
    const str = dni.toString().toUpperCase()

    if(!nifRexp.test(str) && !nieRexp.test(str)) console.log('DNI incorrecto')

    const nie = str
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2')

    const letter = str.substr(-1)
    const charIndex = parseInt(nie.substr(0, 8)) % 23

    if(validChars.charAt(charIndex) === letter) console.log('DNI valido')
    //falta exe
    console.log('DNI incorrecto')
}

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailRegex.test(email)) console.log('email valido')
    else console.log('email incorrecto')
}

const validateIban = (iban) => {
    const ibanRegex = /([A-Z]{2})\s*\t*(\d\d)\s*\t*(\d\d\d\d)\s*\t*(\d\d\d\d)\s*\t*(\d\d)\s*\t*(\d\d\d\d\d\d\d\d\d\d)/g

    if(ibanRegex.test(iban)) console.log('iban valido')
    else console.log('iban incorrecto')
}

const validatePasswordComplex = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
    if(passwordRegex.test(password)) console.log('password valido')
    else console.log('password incorrecto')
}

const validatePasswordModerate = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
    if(passwordRegex.test(password)) console.log('password valido')
    else console.log('password incorrecto')
}

const validateUsername = (username) => {
    //Alphanumeric string that may include _ and â€“ having a length of 3 to 16 characters â€“
    const usernameRegex = /^[a-z0-9_-]{3,16}$/
    if(usernameRegex.test(username)) console.log('username valido')
    else console.log('username incorrecto')
}

const validateUrl = (url) => {
    const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/
    if(urlRegex.test(url)) console.log('url valido')
    else console.log('url incorrecta')
}

const validateIP = (ip) => {
    const ipRegex = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/g
    if(ipRegex.test(ip)) console.log('ip valido')
    else console.log('ip incorrecta')
}

const validateHexadecimal = (hexadecimal) => {
    const hexadecimalRegex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/
    if(hexadecimalRegex.test(hexadecimal)) console.log('hexadecimal valido')
    else console.log('hexadecimal incorrecto')
}

const validateCreditCard = (card) => {
    const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    if(creditCardRegex.test(card)) console.log('card valido')
    else console.log('card incorrecto')
}


//aplicamos las expresiones regulares citadas anteriormente
let evento = document.getElementById("botonSubmit");
evento.addEventListener('click', () => {
    console.clear();

    let dni = document.getElementById("dni").value;
    validateDni(dni);

    let email = document.getElementById("email").value;
    validateEmail(email);

    let cuentaBancaria = document.getElementById("cuentaBancaria").value;
    validateIban(cuentaBancaria);

    let contrasena= document.getElementById("contrasena").value;
    validatePasswordModerate(contrasena);

    let nomUsuario = document.getElementById("nomUsuario").value;
    validateUsername(nomUsuario);

    let url = document.getElementById("url").value;
    validateUrl(url);

    let ip = document.getElementById("ip").value;
    validateIP(ip);

    let tarjCredito = document.getElementById("tarjCredito").value;
    validateCreditCard(tarjCredito);
});

/*
const text = document.getElementById('text').textContent
const regEx = /lorem/gi
const regEx2 = new RegExp('lorem', 'gi')
const regEx3 = new RegExp('/lorem/', 'gi')

console.log(regEx.test(text))
console.log(text.includes('Lorem'))
*/






