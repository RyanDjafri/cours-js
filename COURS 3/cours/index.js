// XMLHttpRequest
// function reqListener() {
//     console.log(this.responseText);
// }
// let req = new XMLHttpRequest();
// req.onload = reqListener;
// // req.open('get', 'data.txt', true);
// // req.open('get', 'data.json', true);
// req.open('get', 'https://api.blablagues.net/?rub=blagues', true);
// req.send(s);

//-----------------------------------------
// FETCH
//-----------------------------------------

// fetch('https://api.blablagues.net/?rub=blagues', 'object d"options').then((reponse) => {
//     // response
// }).catch((err) => {
//     console.log(err)
// });


// fetch('data.txt').then((res) => res.text())
//     .then((data) => console.log(data));

// fetch('data.json').then((res) => res.json())
//     .then((data) => console.log(data));

//----------------------------------

const myHeaders = new Headers();

const init = {
    method: "GET",
    headers: myHeaders,
    mode: 'cors',

}

// fetch('data.json', init).then((res) => console.log(res));

//CRUD => Create (post), read (get), update(put), delete(delete);

const init2 = {
    method: "POST",
    headers: {
        "Content-Type ": "application/json"
    },
    body: JSON.stringify({
        pseudo: "From Scratch",
        message: "Yo les gens ! ",
        mode: "cors",
        credientals: "same-origin",
    })
}
document.querySelector('form').addEventListener('submit', () => {
    fetch('http://localhost:3000/posts ', init2).then(() => console.log('data envoyée'))
})


//------------------------------------------------
// Asynchrone
//-----------------------------------------------

setTimeout(() => {
    // console.log("test")
}, 2200);

// Promise

// fetch('monlien').then((res) => console.log(res));

// async/await

async function fetchData() {
    await fetch('monlien')
    //attend que le await soit exécuté avant de faire la suite
    executeFunction();
}

const fetchData2 = async () => {
    await fetch('monlien');
    // attend que le await soit exécuté avant de faire la suite 
}


//----------------------
//LE JSON 
//------------------------

// méthode .json() => méthode qui s'auto-résout en renvoyant le body de la requête

fetch('data.json').then((res) => res.json())
    .then((data) => {
        // stringify => convertit en JSON
        let settings = JSON.stringify(data);
        // Parse => tranforme json en object js 
        // console.log(JSON.parse(settings))
    });

//-------------------------
// WEB API
//-------------------------


// CLIENT STORAGE 
//------------------------
// LOCAL STORAGE 

localStorage.data = "Je stock la data";
// document.body.textContent = localStorage.data;

const obj = {
    name: "Denis",
    age: 22
}
// Il faut passer des chaînes de caractères 
localStorage.removeItem("data");
localStorage.user = JSON.stringify(obj);

// console.log(JSON.parse(localStorage.user));

// SESSION STORAGE

// sessionStorage.dataSettings = "55px";
// console.log(sessionStorage.dataSettings);

//------------------------------
// LES COOKIES
//----------------------------------

document.cookie = "username=FromScratch";

// Bonne pratique

document.cookie = "pseudo=F5;path=/;max-age=450000; secure; samesite"
