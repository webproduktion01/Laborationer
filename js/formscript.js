window.onload = function() {
    prepareEventHandlers();
};


function prepareEventHandlers() {
    var inputTexts = document.body.getElementsByTagName('input');
    for (var i = 0; i < inputTexts.length; i++) {

        //Adds out of focus out listener to input texts
        inputTexts[i].addEventListener('focusout', checkValidInput(inputTexts[i]), true);
        //Adds in focus in listener to input texts
        inputTexts[i].addEventListener('focusin', removeParagraph(inputTexts[i]), true);
        //Test add focus listener
        //inputTexts[i].addEventListener('focus', checkValidInput(inputTexts[i]),true);
    }
}

/*
    Checks text in input field when it goes out of focus
*/
function checkValidInput(input) {
    //console.log("focus out->id: " + input.getAttribute('id'));
    switch (input.getAttribute('id')) {
        case "firstName":
            checkIfTextIsEmpty(input);
            break;
        case "lastName":
            checkIfTextIsEmpty(input);
            break;
        case "postNumber":
            checkIfAnyCorrectHits(input);
            break;
        case "email":
            checkIfEmailIsCorrect(input);
            break;
        default:

    }
}
/*
    removes warning text paragraph each time focus is on input text
*/
function removeParagraph(input) {
    if (input.parentElement.lastChild.tagName === 'P') {
        input.parentElement.removeChild(input.parentElement.lastChild);
    }
}

/*
    Adds sibling paragraph element next to suitable input text window
    when user does not enter correct input in it.
*/
function checkIfTextIsEmpty(objectRef) {
    if (objectRef.value === null || objectRef.value === "") {
        var paragraph = document.createElement('P');
        paragraph.setAttribute('class', 'warning');
        paragraph.appendChild(document.createTextNode("Detta fält får ej lämnas blankt"));
        objectRef.parentElement.appendChild(paragraph);
    }
    else {
        objectRef.removeAttribute('style');
    }

}
/*
    Checks if text entry is viable, if viable 
    converts string to absolute format
*/
function checkIfAnyCorrectHits(inputField) {
    //RegXp for given pattern
    var regXp = new RegExp('\\b(SE(\\s)([0-9]{3}(-|\\s)[0-9]{2})|SE([0-9]{3}(-|\\s)[0-9]{2})|([0-9]{3}(-|\\s)[0-9]{2})|[0-9]{5})\\b');

    if (regXp.test(inputField.value)) {
        //Removes -|' '|SE from entered text and replaces text in input field.
        inputField.value = regXp.exec(inputField.value)[0].replace(new RegExp('SE|-|\\s', 'g', ''), this);
        inputField.removeAttribute('style');
    }
    else {
        var paragraph = document.createElement('P');
        paragraph.setAttribute('class', 'warning');
        paragraph.appendChild(document.createTextNode("Sifferkombination: #####"));
        inputField.parentElement.appendChild(paragraph);
    }
}
/*
    Checks if email is correct, gives a warning otherwise
*/
function checkIfEmailIsCorrect(inputField) {
    //The longest tld are .museum and .travel , infinitly long tld guarantees futureproofing
    var regXp = new RegExp('\\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]+\\b');
    console.log(inputField.value);
    console.log(regXp.test('a@a.aaa'));
    if (regXp.test(inputField.value)) {
        inputField.removeAttribute('style');
    }
    else{
        var paragraph = document.createElement('P');
        paragraph.appendChild(document.createTextNode("Korrekt emailformat är: a@a.aaa"));
        paragraph.setAttribute('class', 'warning');
        inputField.parentElement.appendChild(paragraph);
    }
}