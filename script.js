let toSendButton = document.querySelector(".button")
let form= document.querySelector(".fale-conosco")
let masck = document.querySelector(".mascara-form")


function toSend(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    masck.style. visibility = "visible"
}
function ToHide(){
    form.style.left = "-290px"
    form.style.transform = "translateX(0)"
    masck.style. visibility = "hidden"
}

toSendButton.addEventListener('click', toSend)