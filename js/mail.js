function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value

    }
    emailjs.send("service_6m84kiu","template_pl7fopi",parms).then(alert("Email send!!!"));
}