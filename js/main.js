
const infoDom = document.getElementById('info');
const cardDom = document.querySelector('.cardCreate');
let imagine = document.getElementsByClassName('image');

//Creaiamo l'array con le info 

const arrayTeam = [
    {
        nome:'Wayne Barnett',
        posizione:'Founder & CEO',
        immagine:'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome:'Angela Caroll',
        posizione:'Chief Editor',
        immagine:'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome:'Walter Gordon',
        posizione:'Office Manager',
        immagine:'img/walter-gordon-office-manager.jpg'
    },
    {
        nome:'Angela Lopez',
        posizione:'Social Media Manager',
        immagine:'img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome:'Scott Estrada',
        posizione:'Developer',
        immagine:'img/scott-estrada-developer.jpg'
    },
    {
        nome:'Barbara Ramos',
        posizione:'Graphic Designer',
        immagine:'img/barbara-ramos-graphic-designer.jpg'
    }
];

console.log(arrayTeam);

//Creo il ciclo per immettere i valori nel Dom

for (let i = 0; i < arrayTeam.length; i++) {

    //Creo le variabili per gli oggetti
    const currentImmage = arrayTeam[i]['immagine'];
    const currentTit = arrayTeam[i]['nome'];
    const currentPos = arrayTeam[i]['posizione'];

    //Richiamo le Funzioni
    const currentCard = addCard();
    const currentDiv = addDiv();
    const currentTitle = addTitle();
    const currentPosition = addPosition();
    const currentImg = addImage();

    //Immetto il tutto nel Dom
    currentDiv.append(currentTitle);
    currentDiv.append(currentPosition);
    currentCard.append(currentDiv);
    cardDom.append(currentCard);
    currentDiv.append(currentImg);

    //Inserisco i Valori
    currentImg.src += currentImmage;
    currentTitle.innerHTML = currentTit;
    currentPosition.innerHTML = currentPos;

}

//Creo le funzioni necessarie

//Creo la Card
function addCard(){

    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.classList.add('rounded-5');
    newCard.classList.add('my-3');
    newCard.classList.add('cardCustomized');
    newCard.style = 'width: 18rem;';

    return newCard  

}

//Creo il div Interno
function addDiv(){

    const newDiv = document.createElement("div");
    newDiv.classList.add('card-body');
    newDiv.classList.add('rounded-5');
    newDiv.classList.add('p-4');
    newDiv.classList.add('card-body-customized');


    return newDiv
}

//Creo le funzioni Per immettere i valori degli oggetti
function addPosition(){

    const newPosition = document.createElement('div');
    newPosition.classList.add('position');

    return newPosition
}

function addTitle(){

    const newName = document.createElement('h1');
    newName.classList.add('title');

    return newName
}

function addImage(){

    const newImage = document.createElement('img');
    newImage.classList.add('image');
    
    return newImage
}


 