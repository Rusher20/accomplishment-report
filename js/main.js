
document.getElementById("button1").addEventListener("click", function(event) {
    event.preventDefault();

    var filePath = "assets/fontillas-John-Russel-A.-RESUME.pdf";

    window.open(filePath, "_blank", "width=600,height=400");
});
document.getElementById("button1").setAttribute("title", "Click to view my resume");


document.getElementById("elem").addEventListener("click", function(event) {
    event.preventDefault();

    var filePath = "assets/ELEM DIPLOMA.JPG";

    window.open(filePath, "_blank", "width=600,height=400");
});

document.getElementById("Jh").addEventListener("click", function(event) {
    event.preventDefault();

    var filePath = "assets/JH DIPLOMA.JPG";

    window.open(filePath, "_blank", "width=600,height=400");
});