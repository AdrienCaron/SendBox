console.log("Hello Saint Jo");

const prenom = 'Loïc'; // string
let year = 2024; // int
const dob = 2003; //ne plus utiliser
const isAdmin = false; //Boolean
const apprenants = ["Enzo", "Thomas", "Valentin"];  // tableau
const sac = {livre: 'BD Tintin', trousse: 'stylo', skills: ["Bagarre", "Jeux Vidéos"] } // objet
const disque = document.querySelector(".disque");
const boutton = document.getElementById("boutton");
const paragraphe = document.querySelector(".div1 p");

setTimeout(() => {
    paragraphe.style.backgroundColor = "white";
}, 4000);

boutton.addEventListener("click", ()=> {
    disque.classList.toggle("pause");

    if (disque.classList.contains("pause")){
        boutton.textContent = "Play";
    }else{
        boutton.textContent = "Pause";
    }
});

console.log(disque);

console.log(apprenants[2]);
console.log(sac.skills[0]);

apprenants.forEach(  // Boucle sur le tableau
    prenom => {
        console.log(`Bonjour ${prenom}`)
    }
)


console.log(`Bonjour ${prenom}`); //concatenation
// calculeAge();


// fonction à l'ancienne
function calculeAge(){
    const age = year - dob;
    console.log(`Voici ton âge : ${age} ans.`); 
}

// nouvelle fonction => arrow function
const calculeAge2 = ()=>{
    const age = year - dob;

    console.log(`Voici ton âge : ${age} ans.`); 

    // if(age > 18){
    //     console.log("Rentre bonhomme.")
    // }else{
    //     console.log("Dehors mauviette.")
    // }

    age > 18 ? console.log("Rentre bonhomme.") : console.log("Dehors mauviette.") // Condition terniaire
}


calculeAge2();