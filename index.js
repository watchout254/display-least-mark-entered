var maths = window.prompt("Enter marks of maths:");
var english = window.prompt("Enter marks of English:");
var biology = window.prompt("Enter marks of biology:");
var geography = window.prompt("Enter marks of geography: ");
var agriculture = window.prompt("Enter marks of agriculture:");
var cre = window.prompt("Enter marks of cre:");

if(maths < english && maths < biology && maths < geography && maths < agriculture && maths < cre) {
    console.log("You have failed in maths", maths);
}

else if(english < maths && english < biology && english < geography && english < agriculture && english < cre) {
    console.log("You have failed in english:", english);
}

else if(biology < maths && biology < english && biology < geography && biology < agriculture && biology < cre) {
    console.log("You have failed in biology:", biology);
}

else if(geography < maths && geography < english && geography < biology && geography < agriculture && geography < cre) {
    console.log("You have failed in geography:", geography);
}

else if(agriculture < maths && agriculture < english && agriculture < biology && agriculture < geography && agriculture < cre) {
    console.log("You have failed in agriculture:", agriculture);
}

else {
    console.log("You have failed in cre:", cre);
}

document.getElementById("math").innerHTML = maths ;
document.getElementById("eng").innerHTML = english;
document.getElementById("bio").innerHTML = biology;
document.getElementById("geo").innerHTML = geography;
document.getElementById("agri").innerHTML = agriculture;
document.getElementById("cre").innerHTML = cre;