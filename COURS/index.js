
// // // SELECTEURS 
// // //document.querySelector('h4').style.background = "yellow";

// // //const baliseHTML = document.querySelector("h4");

// // //console.log(baliseHTML);

// // //baliseHTML.style.background = "yellow";

// // // CLICK EVENTS

// // const questionContainer = document.querySelector(".click-event");
// // const btn1 = document.querySelector('#btn-1');
// // const btn2 = document.getElementById('btn-2');
// // const response = document.querySelector("p");


// // questionContainer.addEventListener("click", function () {
// //     questionContainer.classList.toggle('question-clicked');

// // });


// // btn1.addEventListener('click', () => {
// //     response.classList.add("show-response");
// //     response.style.background = "green";
// // });
// // btn2.addEventListener('click', () => {
// //     response.classList.add("show-response");
// //     response.style.background = "red";
// // });

// // //-----------------------------------------------------------------

// // // MOUSE EVENTS 

// // const mousemove = document.querySelector(".mousemove");

// // window.addEventListener('mousemove', (e) => {
// //     mousemove.style.left = e.pageX + "px";
// //     mousemove.style.top = e.pageY + "px";

// // })

// // window.addEventListener('mousedown', () => {
// //     mousemove.style.transform = "scale(2) translate(-25%,-25%)";
// // })
// // window.addEventListener('mouseup', () => {
// //     mousemove.style.transform = "scale(1) translate(-50%,-50%)";
// //     mousemove.style.border = "2px solid teal";
// // })

// // questionContainer.addEventListener("mouseenter", () => {
// //     questionContainer.style.background = "rgba(0,0,0,0.6)"
// // })
// // questionContainer.addEventListener("mouseout", () => {
// //     questionContainer.style.background = "pink"
// // })

// // response.addEventListener('mouseover', () => {
// //     response.style.transform = "rotate(2deg)";
// // })

// // //-----------------------------------------------------------------------
// // // KEYPRESS EVENTS
// // const keypressContainer = document.querySelector(".keypress");
// // const key = document.getElementById('key');
// // const ring = (key) => {
// //     const audio = new Audio();
// //     audio.src = key + ".mp3";
// //     audio.play();
// // }

// // document.addEventListener('keypress', (e) => {
// //     key.textContent = e.key;

// //     if (e.key === 'j') {
// //         keypressContainer.style.background = "pink";
// //     } else if (e.key === "h") {
// //         keypressContainer.style.background = "teal";
// //     } else {
// //         keypressContainer.style.background = "red";
// //     }
// //     if (e.key === 'z') ring(e.key);

// // })
// // // SCROLL EVENTS

// // const nav = document.querySelector('nav');

// // window.addEventListener("scroll", () => {

// //     if (window.scrollY > 120) {
// //         nav.style.top = 0;
// //     } else {
// //         nav.style.top = "-50px";
// //     }
// // })

// // //--------------------------------------------------------------------
// // // FORM EVENTS

// // const inputName = document.querySelector("input[type='text']");
// // const select = document.querySelector('select');
// // const form = document.querySelector("form")
// // let pseudo = "";
// // let language = "";

// // inputName.addEventListener('input', (e) => {
// //     pseudo = e.target.value;
// // })

// // select.addEventListener('input', (e) => {
// //     language = e.target.value;
// // })

// // form.addEventListener('submit', (e) => {
// //     e.preventDefault();

// //     if (cgv.checked) {
// //         document.querySelector('form > div').innerHTML = `
// //         <h3>Pseudo : ${pseudo}</h3>
// //         <h4> Langage préféré : ${language}</h4>
// //         `

// //     } else {
// //         alert('Veuillez accepter les CGV')
// //     }
// // })

// // // -----------------------------------------
// // // LOAD EVENT 

// // window.addEventListener("load", () => {
// //     console.log("Le site est chargé  !")
// // })

// // // -------------------------------------------------
// // // LESS FOR EACH

// // const boxes = document.querySelectorAll('.box');
// // console.log(boxes)
// // boxes.forEach((box) => {
// //     box.addEventListener('click', (e) => {
// //         e.target.style.transform = 'scale(0.7)';
// //     })
// // })

// // 

const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        result.textContent += e.target.id;
    })
})
equal.addEventListener('click', () => {
    result.textContent = eval(result.textContent)
})
clear.addEventListener('click', () => {
    result.textContent = '';
})
// test pour github


// // //----------------------------------------
// // // addEventListener vs onclick

// // /*document.body.onclick = function () {
// //     console.log('Click !')
// // }

// // document.body.onscroll = () => {
// //     console.log('Sroll ! ')
// // };
// // */


// // // Bubbling => fin (de base l'eventlistener est paramétré en mode bubbling)
// // document.body.addEventListener('click', () => {
// //     console.log('Click n°2 ! ')
// // }, false);

// // // Usecapture

// // document.body.addEventListener('click', () => {
// //     console.log('Click n°1 ! ')
// // }, true);

// // //-----------------------------------------
// // // Stop propagation removeEventListener


// // //questionContainer.addEventListener('click', (e) => {
// // //  alert("test");
// // // e.stopPropagation();
// // //})

// // // removeEventListener

// // //---------------------------------------------------------------
// // // BOM : brother object model

// // //console.log(window.scrollY)

// // // window.open('http://google.com', 'cours js ', 'height=600', 'height=800');
// // // window.close();

// // // confirm
// // // btn2.addEventListener('click', () => {
// // //     confirm("Voulez vous vraiment vous tromper ? ")
// // // });

// // // // prompt
// // // btn1.addEventListener('click', () => {
// // //     let answer = prompt('Entrer votre nom ! ');
// // //     questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>"
// // // })

// // // setTimeout(() => {
// // //     // logique a exécuter
// // // }, 'temps en ms avant de déclencher')
// // // setTimeout(() => {
// // //     questionContainer.style.borderRadius = "300px"
// // // }, 2000)

// // // setInterval(() => {
// // //     // logique a exécuter
// // // }, 'temps en ms avant de déclencher')

// // // let interval = setInterval(() => {
// // //     document.body.innerHTML += `
// // //     <div class='box'><h2>Nouvelle boite ! </h2></div>
// // //     `;
// // // }, 4000);
// // // document.body.addEventListener('click', (e) => {
// // //     clearInterval(interval);
// // // })

// // // Location
// // //console.log(location.href);
// // //console.log(location.host);
// // //console.log(location.pathname);
// // //console.log(location.search);
// // //location.replace('http://lequipe.fr')
// // /*
// // window.onload = () => {
// //     location.href = "http://twitter.fr"
// // };

// // */

// // // Navigator
// // // console.log(navigator.userAgent)

// // // History
// // // console.log(history)
// // // window.history.back();
// // // history.go(-2);

// // //-------------------------------------------------
// // // setProperty

// // window.addEventListener('mousemove', (e) => {
// //     nav.style.setProperty('--x', e.layerX + "px");
// //     nav.style.setProperty('--y', e.layerY + "px");
// // })

// const counterDisplay = document.querySelector('h3');
// let counter = 0;


// const bubbleMaker = () => {
//     const bubble = document.createElement("span");
//     const size = Math.random() * 200 + 100 + 'px ';
//     bubble.classList.add('bubble');
//     document.body.appendChild(bubble);
//     bubble.style.height = size;
//     bubble.style.width = size;
//     bubble.style.top = Math.random() * 100 + 50 + '%';
//     bubble.style.left = Math.random() * 100 + '%';
//     const plusMinus = Math.random() > 0.5 ? 1 : -1;
//     bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");

//     bubble.addEventListener('click', () => {
//         bubble.remove();
//         counter++;
//         counterDisplay.textContent = counter;
//     })



//     setTimeout(() => {
//         bubble.remove();
//     }, 8000)
// };

// setInterval(bubbleMaker, 1000);




