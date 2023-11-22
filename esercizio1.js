/*Esercizio 1 - Variabili e stringhe*/

const userName = prompt(`What's your name, user?`);
const userYearOfBirth = prompt(`Tell me your year of birth`);

if(userYearOfBirth % 4 === 0 && userYearOfBirth % 100 !== 0 || userYearOfBirth % 400 === 0){
    alert(`Hi ${userName}, you were born in a leap year!`)
}else{
    alert(`Hi ${userName}, you were not born in a leap year!`)
};
