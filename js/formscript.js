window.onload = function() {
    eventHandlers();

};

/*
    Checks text in input field when it goes out of focus
*/
function checkValidInput() {
    //console.log(this.getAttribute('id')+" is out of focus!");
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
    Adds sibling paragraph element next to suitable input text window
    when user does not enter correct input in it.
*/
function checkNameConstraint(inputField) {
    if (inputField.value === null || inputField.value === "") {
        addWarningText(inputField, "Detta fält får ej lämnas blankt");
    }
    else {
        removeWarningText(inputField);
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
        removeWarningText(inputField);
    }
    else {
        addWarningText(inputField, "Sifferkombination: #####");
    }
}
/*
    Checks if email is correct, gives a warning otherwise
*/
function checkEmailConstraint(inputField) {
    //The longest tld are .museum and .travel , "infinitely" long tld guarantees futureproofing
    var regXp = new RegExp('\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]+\\b');

    if (regXp.test(inputField.value)) {
        removeWarningText(inputField);
    }
    else {
        addWarningText(inputField, "Korrekt emailformat är: a@a.aaa");
    }
}
/*
    Adds warning text(paragraph) next to input text element
*/
function addWarningText(element, text) {
    if (element.parentElement.lastChild.tagName != 'P'){
    var paragraph = document.createElement('P');
    paragraph.appendChild(document.createTextNode(text));
    paragraph.setAttribute('class', 'warning');
    element.parentElement.appendChild(paragraph);
        if (element.hasAttribute('valid')) {
            element.removeAttribute('valid', '');
            element.setAttribute('invalid', '');
        }
    }
}

/*
    removes warning text(paragraph) next to input text element
*/
function removeWarningText(element) {
    element.removeAttribute('invalid', '');
    element.setAttribute('valid', '');
    if (element.parentElement.lastChild.tagName === 'P') {
        element.parentElement.removeChild(element.parentElement.lastChild);
    }

}


var eventHandlers = function prepareEventHandlers() {
    var inputTexts = document.body.getElementsByTagName('INPUT');
    for (var i = 0; i < inputTexts.length; i++) {
        //Adds out of focus out listener to input texts ,havent decided or checked which to use yet
        //console.log(document.getElementById(inputTexts.item(i).id));
        document.getElementById(inputTexts.item(i).id).addEventListener('onblur', checkValidInput, true);
        document.getElementById(inputTexts.item(i).id).addEventListener('focusout', checkValidInput, true);
        //Adds in focus in listener to input texts, havent decided or checked which to use yet
        document.getElementById(inputTexts.item(i).id).addEventListener('onfocus', checkValidInput, true);
        document.getElementById(inputTexts.item(i).id).addEventListener('focusin', checkValidInput, true);
        //console.log(document.getElementById(inputTexts.item(i).id).id+" has listeners attached");
        //console.log("DOM node: "+inputTexts.item(i));
    }
};

function displayVerify(form) {
    var leContainerForm = document.getElementById("contactForm");
    //checks to see if whole form is correctly filled in
    if (form.checkValidity()) {
        console.log("hit");
        //Creating popup div
        var div = document.createElement('DIV');
        div.setAttribute('id', 'confirm');
        //Getting references to text and data needed to populate it
        var inputs=leContainerForm.getElementsByTagName('INPUT');
        var labels=leContainerForm.getElementsByTagName('LABEL');
        //Creating contents of the popup div
        for(var i=0;i<labels.length;i++){
            console.log(labels.length);
            var cDiv=document.createElement('DIV');
            var desc=document.createElement('H4');
            desc.appendChild(document.createTextNode(labels[i].textContent));
            cDiv.appendChild(desc);
            var para = document.createElement('P');
            para.appendChild(document.createTextNode(inputs[i].value));
            cDiv.appendChild(para);
            div.appendChild(cDiv);
        }
        //Adding annoying unique content to popup div
        var buttonName = div.lastChild.removeChild(div.lastChild.lastChild).textContent;
        var button = document.createElement('INPUT');
        button.setAttribute('type','submit');
        button.setAttribute('name','submit_button');
        button.setAttribute('id','button');
        //Post on submit, not do this function agaaain
        //button.setAttribute('onsubmit','return displayverify(this)');
        //Muyo importante to associate input button with the form
        button.setAttribute('form','contact_form');
        button.value = buttonName;
        var soloDiv=document.createElement('DIV');
        var select=leContainerForm.getElementsByTagName('SELECT')[0];
        var soloP = document.createElement('P');
        soloP.appendChild(document.createTextNode(select.options[select.selectedIndex].text));
        soloDiv.appendChild(soloP);
        div.appendChild(soloDiv);
        var buttonDiv = document.createElement('DIV');
        buttonDiv.appendChild(button);
        div.appendChild(buttonDiv);
        document.body.appendChild(div);
        leContainerForm.setAttribute('id','contactForm_faded');
        return false;
    }
    else {
        console.log("Miss");
        leContainerForm.setAttribute('id','contactForm');
        return false;
    }
}
