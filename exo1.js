var document = "index.html";
var tagName = "p";
var text = "welcome";


function includes(document, tagName, text) {
    const elements = document.getElementsByTagName(tagName);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].textContent === text) {
            return true;
        }
    }
    return false;
}

includes(document, "p", "welcome");