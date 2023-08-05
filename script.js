const buttons = document.querySelectorAll("button");



buttons.forEach(button => {
    button.addEventListener("click", e => {
        button.parentElement.classList.toggle("active");
    })
})