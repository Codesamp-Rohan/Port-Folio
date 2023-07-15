function resume() {
    document.getElementById("aboutContent").style.display = "none";
    document.getElementById("resumeContent").style.display = "block";
    document.getElementById("portfolioContent").style.display = "none";
    document.getElementById("contactContent").style.display = "none";
    document.getElementById("resumeTag").style.color = "#e3c466";
    document.getElementById("aboutTag").style.color = "#d6d6d6";
    document.getElementById("contactTag").style.color = "#d6d6d6";
    document.getElementById("portfolioTag").style.color = "#d6d6d6";
}
function portfolio() {
    document.getElementById("aboutContent").style.display = "none";
    document.getElementById("resumeContent").style.display = "none";
    document.getElementById("portfolioContent").style.display = "block";
    document.getElementById("contactContent").style.display = "none";
    document.getElementById("portfolioTag").style.color = "#e3c466";
    document.getElementById("resumeTag").style.color = "#d6d6d6";
    document.getElementById("contactTag").style.color = "#d6d6d6";
    document.getElementById("aboutTag").style.color = "#d6d6d6";
}
function contact() {
    document.getElementById("aboutContent").style.display = "none";
    document.getElementById("resumeContent").style.display = "none";
    document.getElementById("portfolioContent").style.display = "none";
    document.getElementById("contactContent").style.display = "block";
    document.getElementById("contactTag").style.color = "#e3c466";
    document.getElementById("resumeTag").style.color = "#d6d6d6";
    document.getElementById("portfolioTag").style.color = "#d6d6d6";
    document.getElementById("aboutTag").style.color = "#d6d6d6";
}
function about() {
    document.getElementById("aboutContent").style.display = "block";
    document.getElementById("resumeContent").style.display = "none";
    document.getElementById("portfolioContent").style.display = "none";
    document.getElementById("contactContent").style.display = "none";
    document.getElementById("aboutTag").style.color = "#e3c466";
    document.getElementById("resumeTag").style.color = "#d6d6d6";
    document.getElementById("contactTag").style.color = "#d6d6d6";
    document.getElementById("portfolioTag").style.color = "#d6d6d6";
}


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 200;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
