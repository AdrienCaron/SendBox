console.log("Hello les SN")

const prenom = 'Adrien';//bloque les modification
let year = 2024; //possible de modifier
const dob = 2003 //ne plus utilser
const isAdmin = false // Bollean
const apprenant = ["Adrien, Bastien, Tom"];
const sac = {livre : 'BD tchoupi', trousse:'stylo', skills: ["basket"]} //objet
console.log(apprenant);
console.log(sac.skills);

apprenant.forEach(
   prenom=>{
        console.log(`Bonjour ${apprenant}`)
    });


console.log(`Bonjour ${prenom}`);

//nouvellle fonction => arrow function
const calculeAge2 = ()=>{
    const age = year - dob 
    console.log(`Tu as : ${age} ans. `);
    /*if(age > 18){
        console.log("Tu peux rentrer")
    }else{
        console.log("Dehors ")
    }*/
    

    age > 18 ? console.log("Tu peux rentrer") : console.log("Dehors ")
}
calculeAge2();