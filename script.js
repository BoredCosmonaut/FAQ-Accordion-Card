const texts = document.querySelectorAll(".text")

for(let text of texts) {
    text.addEventListener("click", function(e) {
        console.log("clicked")

        const text = e.currentTarget;
        //Finds the closest container to the clicked arrow
        const container = this.closest(".container")
        //Picks the closest hidden element
        const hidden = container.querySelector(".hidden")
        //Selects the right question to make it bold
        const question = container.querySelector(".text")
        //Rotates the clicked arrow
        const arrow = container.querySelector("#arrow")
        // arrow.classList.toggle("rotate")

        //Checks if the hidden element is displayed or not
        if(hidden) {
            if(hidden.style.display === "block") {
                hidden.style.display = "none"
                question.style.fontWeight = "normal"
                arrow.style.transform = "rotate(0deg)";
            }
            else {
                hidden.style.display = "block"
                question.style.fontWeight = "bold"
                arrow.style.transform = "rotate(180deg)";
            }
        }
    })
}