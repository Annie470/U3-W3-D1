/*
1) Quali sono i tipi primitivi principali in TypeScript?
- string - number - boolean - null - any - undefined -never

2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript. */
const myName : string = "CatZilla";
const myAge : number = 30;
const myType : boolean = true;

/*
3) Tipizza il parametro della seguente funzione: */
const greet = (name : string) => { return "Ciao " + name }

/*
4) Specifica il tipo di ritorno della seguente funzione: */
const sum = (a: number, b: number): number => { return a + b }

/*
5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.*/
const ivaFun =( price : number) : number=> {
return price * 1.22
}
console.log(ivaFun(8));

/*
6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.*/
const stringiline =(s1 :string, s2: string) : number => {
    return (s1 + s2).length
}
console.log(stringiline("Felix", "theCat"))

/*
7) Cos'è un Type Union e come si scrive?
E' un modo di tipizzare una variabile che può essere di un tipo o un'altro */
let fluido : string | boolean ;
fluido = false;
fluido = "vero";

/*
8) Crea una variabile che possa contenere un numero, null o undefined. */
let indecisa : number | null | undefined;

/*
9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.*/
type ggiorno = "Lun" | "Mar" | "Mer"
| "Gio" | "Ven" | "Sab" | "Dom"
let quando : ggiorno = "Sab";

/*
10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers = [1, 2, 3]*/
const numbers1 : number[] = [1,2,3]
const numbers2 : Array<number> = [1,2,3]

/*
11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.*/
const arrayFive : [string, string, string, number, number] = ["a", "b", "c", 5, 8]

/*
12) Qual è la differenza tra type e interface?
Si usa type per unioni di tipi primitivi, interface per oggetti o classi
Type non può essere ridefinito

13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".*/
interface ObjPersona {
    firstname : string,
    lastname : string,
    age : number
}

/*
14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.*/
interface Utente {
  email: string;
  tel?: string;
}

/*
15) Crea un array tipizzato di oggetti "Studente" con nome e voto.*/
interface Studente {
    nome : string,
    voto : number
}
const Tito : Studente = { nome : "Tito", voto : 28}

/*
16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".*/
interface Veicolo {
    guida : boolean,
    ruote : number
}
interface Auto extends Veicolo {
    brand : string
}
const Z100 : Auto = {
    guida: true, ruote: 4, brand: "ZillaWrum"
}

/*
17) Crea un oggetto che implementi l'interfaccia Auto.
18) Cosa sono i Generics in TypeScript?
19) È possibile avere più tipi generici in un'interfaccia?
20) Crea un'interfaccia generica per una risposta API.  
*/ 