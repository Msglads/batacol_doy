
function changeMessage() {
    document.getElementById("message").innerHTML =
        "Hello! You clicked the button!";
}

function changeColor() {
    const colors = [
        "#ffcccc",
        "#ccffcc",
        "#ccccff",
        "#ffffcc",
        "#e6ccff"
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}
