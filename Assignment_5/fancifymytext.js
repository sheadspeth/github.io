function makeBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

function applyStyle(){
    alert("Style changed")

    const textArea = document.getElementById("userText");
    const fancyRadio = document.getElementById("fancy");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooifyText() {
    const textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();

    let sentences = text.split("_");

    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0 && words[0] !== "") {
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    textArea.value = sentences.join("_ ");
}

