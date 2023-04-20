function includes(document, tagName, text) {
    const elements = document.getElementsByTagName(tagName);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].textContent.includes(text)) {
            console.log(true);
        }
    }
    console.log(false);
}

includes(document.body, "p", "welcome");