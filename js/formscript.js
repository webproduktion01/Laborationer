window.onload = function() {
    prepareEventHandlers();
};


function prepareEventHandlers() {
    for (var i = 0; i < document.body.getElementsByTagName('input').length; i++) {
        //Adds out of focus listener to input texts
        document.body.getElementsByTagName('input')[i].addEventListener('focusout', checkValidInput(document.body.getElementsByTagName('input')[i]), false);
        //Adds in focus listener to input texts
        document.body.getElementsByTagName('input')[i].addEventListener('focusin', removeParagraph(document.body.getElementsByTagName('input')[i]), false);
    }
}

/*
    Checks text in input field when it goes out of focus
*/
function checkValidInput(input) {
    switch (input) {
        case "firstName":
            checkIfTextIsEmpty(input);
            break;
        case "lastName":
            checkIfTextIsEmpty(input);
            break;
        case "postNumber":
            checkIfAnyCorrectHits(input)
            break;
        case "email":
            break;
        default:
    }
}
/*
    removes warning each time focus is on input text
*/
function removeParagraph(input){
    //TODO
}

/*
    Adds sibling paragraph element next to suitable input text window
    when user does not enter correct input in it.
*/
function checkIfTextIsEmpty(objectRef) {
    if (objectRef.getAttribute("text") === "") {
        var paragraph = document.createElement('P');
        paragraph.setAttribute('class', 'warning');
        paragraph.appendChild(document.createTextNode("Detta fält får ej lämnas blankt"));
        objectRef.parentElement.appendChild(paragraph);
    }

}
/*
    Checks if text entry is viable, if viable 
    converts string to absolute format
    
    TODO fix \s
*/
function checkIfAnyCorrectHits(inputField){
    //RegXp for given pattern
    var regXp = new RegExp('SE([0-9]{3}(-|\s)[0-9]{2})|([0-9]{3}(-|\s)[0-9]{2})');
    
    if(regXp.test(inputField.getAttribute('text'))){
        //Removes -|' '|SE from entered text and replaces text in input field. see if this works for this
        inputField.setAttribute('text',regXp.exec(inputField.getAttribute('text')).toString().replace(new RegExp('SE|-|\s','g',''),this));
    }
}