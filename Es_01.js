/*
Crea una web app dove l'utente inserisce una stringa, e dopo aver premuto il pulsante di verifica, la web app, controlla se è un indirizzo email valido e lo comunica all'utente
La stringa deve contenere un carattere "@"
La stringa deve contenere un carattere "."
La "@" deve avere almeno un carattere davanti: per esempio "e@bella.com" è valido mentre "@edabit.com" non è valido
Il "." e la "@" devono trovarsi nei posti appropriati.
per esempio. "bella.ciao@com" non è valido mentre "don.sandalo@email.com" è valido.
Se la stringa supera questi test, viene considerata un indirizzo email valido.

Esempi:
validaEmail ("@gmail.com") ➞ false
validaEmail ("ciao.gmail@com") ➞ false
validaEmail ("gmail") ➞ false
validaEmail ("ciao@gmail") ➞ false 
validaEmail ("ciao@bella.com") ➞ true 
*/
function mailvalidation(email) 
{
var email=document.forms['myform'].email.value;
if(email==''){alert("indicates an email address"); return false;}
   
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
alert("email address entered invalid")
    }
else {
alert("email address entered invalid");
    }
    return false;
}