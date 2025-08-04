/*
1) Quali sono i tipi primitivi principali in TypeScript?
- string - number - boolean - null - any - undefined -never

2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript. */
var myName = "CatZilla";
var myAge = 30;
var myType = true;
/*
3) Tipizza il parametro della seguente funzione: */
var greet = function (name) { return "Ciao " + name; };
/*
4) Specifica il tipo di ritorno della seguente funzione: */
var sum = function (a, b) { return a + b; };
/*
5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.*/
var ivaFun = function (price) {
    return price * 1.22;
};
console.log(ivaFun(8));
/*
6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.*/
var stringiline = function (s1, s2) {
    return (s1 + s2).length;
};
console.log(stringiline("Felix", "theCat"));
/*
7) Cos'è un Type Union e come si scrive?
E' un modo di tipizzare una variabile che può essere di un tipo o un'altro */
var fluido;
fluido = false;
fluido = "vero";
/*
8) Crea una variabile che possa contenere un numero, null o undefined. */
var indecisa;
var quando = "Sab";
/*
10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers = [1, 2, 3]*/
var numbers1 = [1, 2, 3];
var numbers2 = [1, 2, 3];
/*
11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.*/
var arrayFive = ["a", "b", "c", 5, 8];
var Tito = { nome: "Tito", voto: 28 };
/*
17) Crea un oggetto che implementi l'interfaccia Auto.*/
var Z100 = {
    guida: true, ruote: 4, brand: "ZillaWrum"
};
var data = {
    id: 23546,
    description: "Very tiny and fluffy",
    data: [30, 25]
};
