const btns = document.querySelectorAll("button");

for(btn of btns) {
    btn.addEventListener("click", () => {
        console.log("buttun was clicked");

    });

}