window.onload = function() {
    eventHandlers();
    
};

/*
    Checks text in input field when it goes out of focus
*/
function checkValidInput() {
    console.log(this.getAttribute('id')+" is out of focus!");
    switch (this.getAttribute('id')) {
        case "firstName":
            checkNameConstraint(this);
            break;
        case "lastName":
            checkNameConstraint(this);
            break;
        case "postNumber":
            checkPostNumberConstraintAndAdapt(this);
            break;
        case "email":
            checkEmailConstraint(this);
            break;
        default:

    }
}
/*
    removes warning text paragraph each time focus is on input text
*/
function removeParagraph() {
    console.log(this.id+" is in focus!");
    if (this.parentElement.lastChild.tagName === 'P') {
        this.parentElement.removeChild(this.parentElement.lastChild);
    }
}

/*
    Adds sibling paragraph element next to suitable input text window
    when user does not enter correct input in it.
*/
function checkNameConstraint(inputField) {
    if (inputField.value === null || inputField.value === "") {
        var paragraph = document.createElement('P');
        paragraph.setAttribute('class', 'warning');
        paragraph.appendChild(document.createTextNode("Detta fält får ej lämnas blankt"));
        inputField.parentElement.appendChild(paragraph);
        inputField.removeAttribute('valid', '');
        inputField.setAttribute('invalid', '');
    }
    else {
        inputField.removeAttribute('invalid', '');
        inputField.setAttribute('valid', '');
    }

}
/*
    Checks if text entry is viable, if viable 
    converts string to absolute format
*/
function checkPostNumberConstraintAndAdapt(inputField) {
    //RegXp for given pattern
    var regXp = new RegExp('\\b(SE(\\s)([0-9]{3}(-|\\s)[0-9]{2})|SE([0-9]{3}(-|\\s)[0-9]{2})|([0-9]{3}(-|\\s)[0-9]{2})|[0-9]{5})\\b');

    if (regXp.test(inputField.value)) {
        //Removes -|' '|SE from entered text and replaces text in input field.
        inputField.value = regXp.exec(inputField.value)[0].replace(new RegExp('SE|-|\\s', 'g', ''), this);
        inputField.removeAttribute('invalid', '');
        inputField.setAttribute('valid', '');
    }
    else {
        var paragraph = document.createElement('P');
        paragraph.setAttribute('class', 'warning');
        paragraph.appendChild(document.createTextNode("Sifferkombination: #####"));
        inputField.parentElement.appendChild(paragraph);
        inputField.removeAttribute('valid', '');
        inputField.setAttribute('invalid', '');
    }
}
/*
    Checks if email is correct, gives a warning otherwise
*/
function checkEmailConstraint(inputField) {
    //The longest tld are .museum and .travel , infinitly long tld guarantees futureproofing
    var regXp = new RegExp('\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]+\\b');

    if (regXp.test(inputField.value)) {
        inputField.removeAttribute('invalid', '');
        inputField.setAttribute('valid', '');
    }
    else {
        var paragraph = document.createElement('P');
        paragraph.appendChild(document.createTextNode("Korrekt emailformat är: a@a.aaa"));
        paragraph.setAttribute('class', 'warning');
        inputField.parentElement.appendChild(paragraph);
        inputField.removeAttribute('valid', '');
        inputField.setAttribute('invalid', '');
    }
}


var eventHandlers = function prepareEventHandlers() {
    var inputTexts = document.body.getElementsByTagName('INPUT');
    
    for (var i = 0; i < inputTexts.length; i++) {

        //Adds out of focus out listener to input texts
        console.log(document.getElementById(inputTexts.item(i).id));
        document.getElementById(inputTexts.item(i).id).addEventListener('onblur', checkValidInput, true);
        document.getElementById(inputTexts.item(i).id).addEventListener('focusout', checkValidInput, true);
        //Adds in focus in listener to input texts
        document.getElementById(inputTexts.item(i).id).addEventListener('onfocus', removeParagraph, true);
        document.getElementById(inputTexts.item(i).id).addEventListener('focusin', removeParagraph, true);
        console.log(document.getElementById(inputTexts.item(i).id).id+" has listeners attached");
        console.log("DOM node: "+inputTexts.item(i));
        //Test add focus listener
        //inputTexts[i].addEventListener('focus', checkValidInput(inputTexts[i]),true);
    }
};
