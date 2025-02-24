function sendMail() {
    alert('kkkkkk');
    let para = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    if (para.name == ""||para.email == ""||para.phone == ""||para.subject == ""||para.message == "") {
        
        document.getElementById("formerror").innerText = "field Required !";
        return false;
    
    } else {
        emailjs.send("service_6m84kiu", "template_pl7fopi", para).then(alert("Email send!!!"));
    }

}