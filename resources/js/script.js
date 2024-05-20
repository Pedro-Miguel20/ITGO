//function to unable the button and shows whats wrong when signing in.
var check = function() {
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    var valuePass = document.getElementById('password').value;
    if (document.getElementById('password').value == document.getElementById('conf-password').value && valuePass.length) {
        document.getElementById('conf-password').style.color = 'green';
        document.getElementById("cta1").disabled = false;
        document.querySelector(".box").classList.remove("teste");
            
    } else {
        document.getElementById('conf-password').style.color = "red";
        document.getElementById("cta1").disabled = true;
        document.querySelector(".box").classList.add("teste");
    }

    if (emailSign.value.match(validRegex)) {
        checkerSign = true;
        document.getElementById("emailSign").style.color = "";
    } else {
        document.getElementById("emailSign").style.color = "red";
        document.getElementById("cta1").disabled = true;
        document.querySelector(".box").classList.add("teste");
    } 
}


//function to change the password input eye and to show the password    
const togglePassword = document.querySelector('#eye');
const password = document.querySelector('#login-pass');
togglePassword.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
