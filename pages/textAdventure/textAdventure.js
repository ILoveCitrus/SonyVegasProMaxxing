const consoleInput = document.getElementById("consoleInput");
const consoleOutput = document.getElementById("consoleOutput");

function playKeySound() {
    const sound = new Audio("keypress1.wav");
    sound.volume = 0.3;
    sound.play();
}

consoleInput.addEventListener("keydown", async function(event) {

    if (event.key === "Enter") {

        const text = consoleInput.value;

        consoleInput.value = "";

        // wait until user line finishes typing
        await typeLine("> " + text);

        // THEN check keyword
        if (text.includes("Noelle")) {
            await typeLine("THE FORBIDDEN PATH STARTED WITH ICE MAGIC", { color: "#7dd3ff" });
        }
    }

});

function typeLine(text, options = {}) {

    return new Promise((resolve) => {

        const newLine = document.createElement("div");
        consoleOutput.appendChild(newLine);

        if (options.color) {
            newLine.style.color = options.color;
        }

        let index = 0;

        const interval = setInterval(function() {

            newLine.textContent += text[index];

            if (text[index] !== " ") {
                playKeySound();
            }

            index++;

            if (index >= text.length) {
                clearInterval(interval);
                resolve(); // 👈 tells JS "typing is done"
            }

        }, 35);

    });
}