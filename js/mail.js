function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        name : document.getElementById("email").value,
        name : document.getElementById("phone").value,
        name : document.getElementById("subject").value,
        name : document.getElementById("message").value,

    }
    emailjs.send("service_6m84kiu","template_pl7fopi",parms).then(alert("Email send!!!"))
}