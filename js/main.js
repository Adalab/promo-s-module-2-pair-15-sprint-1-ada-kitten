'use strict';



// A OBJETOS
const catList = document.querySelector('.js-list');
const kittenDataList = [
  
       const kitten1 = {
        img: 'https://dev.adalab.es/gato-siames.webp',
        name: 'Anastacio',
        desc: `Porte elegante, su patrón de color tan característico y sus ojos
      de un azul intenso, pero su historia se remonta a Asía al menos
      hace 500 años, donde tuvo su origen muy posiblemente.`,
        race: 'Siamés',
      },
        
      
      // const kittenOne = addKittenHtmlCode(kitten1.name,kitten1.img, kitten1.race, kitten1.desc);


       kitten2 = {
        img: 'https://dev.adalab.es/sphynx-gato.webp',
        name: 'Fiona',
        desc: `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
        hasta con pinta de alienígena han llegado a definir a esta raza
        gatuna que se caracteriza por la «ausencia» de pelo. `,
        race: 'Sphynx',
      },
      // const kittenTwo = addKittenHtmlCode(kitten2.name,kitten2.img, kitten2.race, kitten2.desc);

       kitten3 = {
        img: 'https://dev.adalab.es/maine-coon-cat.webp',
        name: 'Cielo',
        desc: `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
        bella mirada se ha convertido en una de sus señas de identidad.
        Sus ojos son grandes y las orejas resultan largas y en punta. `,
        race: 'Maine Coon',
      }
      // const kittenThree = addKittenHtmlCode(kitten3.name,kitten3.img, kitten3.race, kitten3.desc);

];



//  catList.innerHTML = kittenDataList;

// function renderKittenList (kittenDataList[2]) {
 for (let i=0; i<kittenDataList.length; i++){
  catList.innerHTML += 
 
  `<li class="card">
  <article>
  <img class="card_img" src= "${kittenDataList[i].img}" alt="siames-cat" />
  <h3 class="card_title">${kittenDataList[i].name}</h3>
  <h4 class="card_race">${kittenDataList[i].race}</h4>
  <p class="card_description">${kittenDataList[i].desc}
  </p>
  </article >
  </li>`; 
  }

//  }
  
// }


// BUSCADOR
const input_search_desc = document.querySelector('.js_in_search_desc');
const handleClickSearch = (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  if (kitten1.desc.includes(descrSearchText)) {
    console.log(kitten1);
    catList.innerHTML = kittenOne;
  }
  if (kitten2.desc.includes(descrSearchText)) {
    catList.innerHTML = kittenTwo;
  }
  if(kitten3.desc.includes(descrSearchText)) {
    catList.innerHTML = kittenThree;
  }
  if(descrSearchText === '') {
  catList.innerHTML = kittenOne + kittenTwo + kittenThree;
  }
}

const btnSearch = document.querySelector('.js-button-search');
btnSearch.addEventListener('click', handleClickSearch);

//COLLAPSE
const button = document.querySelector(".menu");
 const formElement = document.querySelector(".js-new-form");


  function showNewCatForm () {
    formElement.classList.remove('collapsed');
  }
  function hideenNewCatForm () {
    formElement.classList.add('collapsed');
  }

  button.addEventListener('click', handleClickNewCatForm);

  function handleClickNewCatForm (event) {
    event.preventDefault();
    if (formElement.classList.contains('collapsed')) {
      showNewCatForm ();
    }
    else {
      hideenNewCatForm ();
    }
  }

//ADD NEW CAT
  const buttonAdd = document.querySelector(".js-button");
  const inputDesc = document.querySelector('.js-input-desc');
  const inputPhoto = document.querySelector('.js-input-photo');
  const inputName = document.querySelector('.js-input-name');
  const inputRace = document.querySelector('.js-input-race');
 /* const valueDesc = inputDesc.value;
  const valueName = inputName.value;
  const valuePhoto = inputPhoto.value;
  const valueRace = inputRace.value;*/
  const labelMessageError = document.querySelector('.js-label-error');


function addKittenHtmlCode(name, img, race, desc) {
  let htmlCode = `<li class="card">`;
  htmlCode += `<article>`;
  htmlCode += `<img class="card_img" src= "${img}" alt="siames-cat" />`;
  htmlCode += `<h3 class="card_title">${name}</h3>`;
  htmlCode += `<h4 class="card_race">${race}</h4>` ;
  htmlCode += `<p class="card_description">${desc}
  </p>`;
  htmlCode += `</article >`;
  htmlCode += `</li>`;
  return htmlCode;  
}
 
  
buttonAdd.addEventListener('click', (event) => {
   event.preventDefault();
    /*const valueDesc = inputDesc.value;
    const valueName = inputName.value;
    const valuePhoto = inputPhoto.value;
  const valueRace = inputRace.value;*/
  
  const newKitten = {
    img: inputPhoto.value,
    name: inputName.value,
    desc: inputDesc.value,
    race: inputRace.value,
  };
    

    if (newKitten.desc === '' || newKitten.img === '' || newKitten.name === '') 
    {
      labelMessageError.innerHTML = "¡Uy parece que has olvidado algo!";
    }
    else (!newKitten.desc === '' || !newKitten.img === '' || !newKitten.name === '') 
    {
      const addKittenForm = addKittenHtmlCode(newKitten.name, newKitten.img, newKitten.race, newKitten.desc); 
      catList.innerHTML += addKittenForm;
    }
    
  });
  



  
