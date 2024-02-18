
document.getElementById("button1").addEventListener("click", function(event) {
    event.preventDefault();

    var filePath = "assets/fontillas-John-Russel-A.-RESUME.pdf";

    window.open(filePath, "_blank", "width=600,height=400");
});
document.getElementById("button1").setAttribute("title", "Click to view my resume");


document.getElementById("elem").addEventListener("click", function(event) {
    event.preventDefault();

    var filePath = "ELEM.html";

    window.open(filePath, "_blank");
});

document.getElementById("Jh").addEventListener("click", function(event) {
    event.preventDefault();

    var filePath = "JH.html";

    window.open(filePath, "_blank");
});