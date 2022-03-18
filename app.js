const closeBtn = document.querySelector(".close-message-btn");
const message = document.querySelector(".message-wrapper");

closeBtn.addEventListener("click", function(){
    message.classList.add("close-message");
});