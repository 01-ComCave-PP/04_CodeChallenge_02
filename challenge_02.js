/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


const TRUE = true
let firstName, age; 


firstName = prompt("Name: ");
age = Number(prompt("Alter: "));


switch (TRUE) {
    case (age < 0):
        console.log(firstName + " kein gültiges Alter");
    case (age <= 5):
        console.log(firstName + " trinkt milch");
        break;
    case (age > 5 , age < 13):
        console.log(firstName + " trinkt saft");
        break;
    case (age > 12 , age < 18):
        console.log(firstName + " trinkt Cola");
        break;
    case (age >= 18):
        console.log(firstName + " trinkt wein");
        break;

    default:
        console.log("keine gültige Angabe");
        break;

}