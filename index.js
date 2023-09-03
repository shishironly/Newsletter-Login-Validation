var containerEl=document.querySelector(".container")
var error=document.getElementById("error");
var buttonEl=document.querySelector(".check");
var popupContainerEl=document.querySelector(".popup-container");
var regex=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
var inputError=document.getElementById("mail");
var message = document.getElementById("message");
var dismiss=document.getElementById("dismiss");


buttonEl.addEventListener("click",()=>{

    var mail=document.getElementById("mail").value;
    // console.log(mail);
    if(regex.test(mail)){
        containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
    
    message.innerHTML=`A confirmation email has been sent to <h4>${mail}</h4>.Please open it and
    click the button inside to confirm your subscription.`;
    return true;
    }
    else{
        error.innerHTML="Valid email required";
        inputError.classList.add("inputError");
        return false;
    }
    
});


dismiss.addEventListener("click",()=>{
    popupContainerEl.classList.add("active");
    containerEl.classList.remove("active");
    mail.value="";
    inputError.classList.remove("inputError");
    error.innerHTML="";

})
