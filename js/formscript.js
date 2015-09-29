window.onload = function() {
    prepareEventHandlers();

};


function prepareEventHandlers() {
    var inputTexts= document.body.getElementsByTagName('input');
    for (var i = 0; i < inputTexts.length; i++) {

        //Adds out of focus out listener to input texts
        inputTexts[i].addEventListener('focusout', checkValidInput(inputTexts[i]),true);
        //Adds in focus in listener to input texts
        inputTexts[i].addEventListener('focusin', removeParagraph(inputTexts[i]),true);
        //Test adds focus listener
        //inputTexts[i].addEventListener('focus', checkValidInput(inputTexts[i]),true);

    }
}

/*
    Checks text in input field when it goes out of focus
*/
function checkValidInput(input) {
    console.log("focus out->id: " + input.getAttribute('id') );
    switch (input.getAttribute('id')) {
        case "firstName":
            console.log("focus out->id: " + input.getAttribute('id') );
            checkIfTextIsEmpty(input);
            break;
        case "lastName":
            checkIfTextIsEmpty(input);
            break;
        case "postNumber":
            checkIfAnyCorrectHits(input);
            break;
        case "email":
            break;
        default:

    }
}
/*
    removes warning text paragraph each time focus is on input text
*/
function removeParagraph(input) {
    //console.log("id: " + input.getAttribute('id') + " focusin");
    //TODO
    //console.log(input.parentElement.lastChild);
    if(input.parentElement.lastChild.tagName==='P'){
        input.parentElement.removeChild(input.parentElement.lastChild);
    }
        
}

/*
    Adds sibling paragraph element next to suitable input text window
    when user does not enter correct input in it.
    
    TODO -test it
*/
function checkIfTextIsEmpty(objectRef) {
    console.log(objectRef.value);
    if (objectRef.value === null || objectRef.value==="" ) {
        var paragraph = document.createElement('P');
        paragraph.setAttribute('class', 'warning');
        paragraph.appendChild(document.createTextNode("Detta fält får ej lämnas blankt"));
        paragraph.setAttribute('style','color:red');
        objectRef.setAttribute('style' , 'outline-color:empty:red');
        objectRef.parentElement.appendChild(paragraph);
    }
    else{
        objectRef.removeAttribute('style');        
    }

}
/*
    Checks if text entry is viable, if viable 
    converts string to absolute format
    
*/
function checkIfAnyCorrectHits(inputField) {
    //RegXp for given pattern
    var regXp = new RegExp('SE([0-9]{3}(-|\\s)[0-9]{2})|([0-9]{3}(-|\\s)[0-9]{2})|[0-9]{5}');

    if (regXp.test(inputField.value)) {
        //Removes -|' '|SE from entered text and replaces text in input field. see if this works for this
        inputField.value=regXp.exec(inputField.value)[0].replace(new RegExp('SE|-|\\s', 'g', ''), this);
        inputField.removeAttribute('style');
        
    }
    else{
        var paragraph = document.createElement('P');
        paragraph.setAttribute('class', 'warning');
        paragraph.appendChild(document.createTextNode("Sifferkombination: #####"));
        paragraph.setAttribute('style','color:red');
        inputField.parentElement.appendChild(paragraph);
    }
}