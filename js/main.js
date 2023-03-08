
const infoDom = document.getElementById('info');

//Creaiamo l'array con le info 

const arrayTeam = [
    {
        nome:'Wayne Barnett',
        posizione:'Founder & CEO',
        immagine:'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome:'Angela Caroll',
        posizione:'Chief Editor',
        immagine:'angela-caroll-chief-editor.jpg'
    },
    {
        nome:'Walter Gordon',
        posizione:'Office Manager',
        immagine:'walter-gordon-office-manager.jpg'
    },
    {
        nome:'Angela Lopez',
        posizione:'Social Media Manager',
        immagine:'ngela-lopez-social-media-manager.jpg'
    },
    {
        nome:'Scott Estrada',
        posizione:'Developer',
        immagine:'scott-estrada-developer.jpg'
    },
    {
        nome:'Barbara Ramos',
        posizione:'Graphic Designer',
        immagine:'barbara-ramos-graphic-designer.jpg'
    }
];

console.log(arrayTeam);

//Imettiamo i valori nel Dom

for (let i = 0; i < arrayTeam.length; i++) {

    const currentTeam = arrayTeam[i];

    for (var key in currentTeam) {
        infoDom.innerHTML += `<li>${currentTeam[key]}</li>`;
    }
}