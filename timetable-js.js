const editBtn = document.querySelector(".edit-btn");
const message = document.querySelector(".message-wrapper");

editBtn.addEventListener("click", function(){
    message.classList.add("open-message");
});

const closeBtn = document.querySelector(".close-message-btn");

closeBtn.addEventListener("click", function(){
    message.classList.remove("open-message");
});