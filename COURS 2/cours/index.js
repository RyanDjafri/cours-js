// // // Rappel des types de données
// // let string = "Chaine";
// // let number = 25;
// // let boolean = true;
// // let maVaribale; // type Undefined

// // Tableaux
// let array = ["Bordeaux", "Toulouse", "Nantes"];
// // let array = [0,1,2,3,4,...]
// // console.log(array[0][3])

// let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis " }];
// // console.log(array2[4]);

// let objet = {
//     pseudo: "Denis",
//     age: 33,
//     techno: ["Javascript", "React", "NodeJS"],
//     admin: false,
// }


// // objet.adresse = "22 rue du code";
// // console.log(objet.adresse);

// let data = [
//     {
//         pseudo: "Denis",
//         age: 33,
//         techno: ["Javascript", "React", "NodeJS"],
//         admin: false,
//     },
//     {
//         pseudo: "Samia",
//         age: 24,
//         techno: ["CSS", "React", "NodeJS"],
//         admin: false,
//     },
//     {
//         pseudo: "Nikola",
//         age: 42,
//         techno: ["Php", "React", "NodeJS"],
//         admin: true,
//     },

// ]

// // console.log(data[2].pseudo)

// //--------------------------------------
// // LES STRUCTURES DE CONTROLES
// //--------------------------------------

// if (data[0].age > data[1].age) {
//     // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo)
// } else {
//     // valeur si faux 
// };

// let w = 0;

// while (w < 10) {
//     w++;
//     //  console.log("La valeur de w est de : " + w)
// }

// // Do while 
// let d = 0;

// do {
//     d++;
//     // console.log(d);
// } while (d < 5);

// // Les boucles for 

// for (const user of data) {
//     // document.body.innerHTML += `
//     // <li>${user.pseudo} - ${user.age} ans - ${user.techno}</li>
//     // `;
// }
// // for(valeur de i, jusqu'ou on boucle, evolution de i )
// for (i = 0; i < data.length; i++) {
//     // console.log(data[i].techno[0]);
//     // document.body.innerHTML += "<h2>" + data[i].techno + "</h2>"
// }

// //-----------------------------------------
// // switch

// document.addEventListener('click', (e) => {
//     console.log(e.target.id)

//     switch (e.target.id) {
//         case 'javascript': document.body.style.background = "yellow";
//             break;
//         case "php": document.body.style.background = "purple";
//             break;
//         case "python": document.body.style.background = "blue";
//             break;
//         default:
//             null;
//     }
// });
// //----------------------------------------------------------
// // Méthode de strings
// let string = "Javascript est un langage orienté objet";

// // console.log(eval(parseInt('1') + 2));
// // console.log(typeof parseInt('42'));

// // console.log(string.length)

// // console.log(string.indexOf('langage'));
// // console.log(string.indexOf("x"))//retourne -1 si il ne connait pas ;

// // let newString = string.slice(0, 10);
// // console.log(string.split(" "));
// // console.log(string.toLowerCase());
// // console.log(string.toUpperCase());
// // console.log(string.replace('Javascript', 'PHP'));



// //-------------------------------------------------------------
// // Méthodes pour les numbers

// let number = 42.1234;
// let numberString = "42.12 est un chiffre";


// // console.log(number.toFixed(2));
// // console.log(parseInt('43'));
// // console.log(parseInt(numberString));
// // console.log(parseFloat(numberString));

// //---------------------------------------------
// //Math

// // console.log(Math.PI);
// // console.log(Math.round(4.4));
// // console.log(Math.floor(4.9));
// // console.log(Math.ceil(5.8));
// // console.log(Math.pow(2, 7));
// // console.log(Math.sqrt(49));
// // console.log(Math.floor(Math.random() * 50));

// //-------------------------------------------------
// //Méthodes pour arrays
// let array3 = ["Javascript", "Php", "Python"];
// let array4 = ["Ruby", "Solidity"];

// let newArray = [...array3, ...array4];
// // console.log(newArray);

// // console.log(array3.join(" - "));
// // console.log(array3.slice(3))
// // console.log(newArray.slice(2, 5));
// // console.log(array3.indexOf("Python"));

// // array3.forEach((languages)=> {
// //     console.log(languages);
// // });

// // console.log(array3.every((language) => 
// //     language === "Php"
// // ));
// // console.log(array3.some((language) => 
// //     language === "Php"
// // ));

// // let shift = array3.shift();
// // console.log(array3):

// // console.log(array3.pop());

// // const restArray = array3.splice(1, 1, "C++");
// // console.log(array3);


// // IMPORTANT //

// let arrayNumber = [4, 74, 28, 12, 1];

// // console.log(arrayNumber.reduce((x, y) => x + y));
// arrayNumber.push(17);
// // console.log(arrayNumber);






// //-------------------------------------------------
// // FILTER, SORT, MAP // 
// //-----------------------------------------------


// // console.log(arrayNumber.filter((number) => number > 10));
// // console.log(arrayNumber.sort());
// // console.log(arrayNumber.sort((a, b) => a - b));


// // arrayNumber.map((number) => document.body.innerHTML += `<li>${number}</li>`)

// // document.body.innerHTML = arrayNumber.map((number) => `<li>${number}</li>`).join(' ');

// document.body.innerHTML = data.sort((a, b) => a.age - b.age).map((user) => `
// <div class="user-card ">
//     <h2>${user.pseudo}</h2>
// <p>Age : ${user.age}</p>
// <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
// </div>

// `).join(' ');

// ---------------------------------------
// Les dates
// ----------------------------------------

let date = new Date();

// console.log(date);

// timestamp
let timestamp = Date.parse(date);
// console.log(timestamp);

// Isostring
let iso = date.toISOString();
// console.log(date.toISOString());

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: "long",
        day: "numeric",
        hour: 'numeric',
        minute: "numeric",
    });
    return newDate;

}
// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

//---------------------------------------
//Destructuring
//---------------------------------------

let moreData = {
    destVar: ["Element 1 ", "Element 2"]
}

const { destVar } = moreData;

// console.log(destVar)

let array5 = [70, 80, 90];

let [x, y, z] = array5;
// console.log(x, y, z);

// console.log(iso);

const dateDestructuring = (chaine) => {
    let newDate = chaine.split("T");
    let [y, m, d] = newDate.split("-");
    return [d, m, y].join("/");

}
// console.log(dateDestructuring(iso));

//----------------------------
// Les datasets
//-----------------------------

const h3js = document.getElementById("javascript");
// console.log(h3js.dataset.lang);
const h3 = document.querySelectorAll('h3');

// h3.forEach((language) => console.log(language.dataset.lang));

//----------------------------
// Les regex
//------------------------------
let mail = "ryandjafri@gmail.com";
// console.log(mail.search(/ryan/));

// console.log(mail.replace(/ryan/, 'someone'));

// console.log(mail.match(/Ryan/i));
// console.log(mail.match(/[r]/));

// console.log(mail.match(/[123]/));

// console.log(mail.match(/\d/)); // tous les chiffres
// console.log(mail.match(/[a-z]/)); /// toutes les lettres

// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 265264849;

// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));