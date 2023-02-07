'use strict';

// const newForm = document.querySelector('.js-new-form');
// newForm.classList.remove('collapsed');




const kittenImage1 = 'src= "https://dev.adalab.es/gato-siames.webp"';
const kittenName1 = 'Anastacio';
const kittenDesc1 = `Porte elegante, su patrón de color tan característico y sus ojos
de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`;
const kittenRace1 = 'Siamés';
const title1 = kittenName1;
const upperCase1 = title1.toUpperCase();



const catList = document.querySelector('.js-list');
const kittenOne =  `<li class="card">
          <article>
            <img class="card_img" ${kittenImage1} alt="siames-cat" />
            <h3 class="card_title">${upperCase1}</h3>
            <h4 class="card_race">${kittenRace1}</h4>
            <p class="card_description">
            ${kittenDesc1}
            </p>
          </article>
        </li>`;

const kittenImage2 = 'src="https://dev.adalab.es/sphynx-gato.webp"';
const kittenName2 = 'Fiona';
const kittenDesc2 = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
hasta con pinta de alienígena han llegado a definir a esta raza
gatuna que se caracteriza por la «ausencia» de pelo. `;
const kittenRace2 = 'Sphynx';
const title2 = kittenName2;
const upperCase2 = title2.toUpperCase();

const kittenTwo = `<li class="card">
          <img class="card_img" ${kittenImage2} alt="sphynx-cat" />
          <h3 class="card_title">${upperCase2}</h3>
          <h4 class="card_race">${kittenRace2}</h4>
          <p class="card_description">
          ${kittenDesc2}
          </p>
        </li>`;

const kittenImage3 = 'src="https://dev.adalab.es/maine-coon-cat.webp"';
const kittenName3 = 'Cielo';
const kittenDesc3 = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta. `;
const kittenRace3 = 'Maine Coon';       
const title3 = kittenName3;
const upperCase3 = title3.toUpperCase();

const kittenThree = ` <li class="card">
          <img class="card_img" ${kittenImage3} alt="maine-coon-cat" />
          <h3 class="card_title">${upperCase3}</h3>
          <h4 class="card_race">${kittenRace3}</h4>
          <p class="card_description">
          ${kittenDesc3}
          </p>
        </li>`;



const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

if (kittenDesc1.includes(descrSearchText)) {
  console.log(kittenOne);
  catList.innerHTML = kittenOne;
}
if (kittenDesc2.includes(descrSearchText)) {
  catList.innerHTML = kittenTwo;
}
if(kittenDesc3.includes(descrSearchText)) {
  catList.innerHTML = kittenThree;
}
if(descrSearchText === '') {
catList.innerHTML = kittenOne + kittenTwo + kittenThree;
}

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

  // const buttonAdd = document.querySelector(".js-button");
  // buttonAdd.addEventListener('click', addNewKitten);
  // function addNewKitten (event) {
  //   event.preventDefault();

  // }

  const buttonAdd = document.querySelector(".js-button");
  const inputDesc = document.querySelector('.js-input-desc');
  const inputPhoto = document.querySelector('.js-input-photo');
  const inputName = document.querySelector('.js-input-name');
  const labelMessageError = document.querySelector('.js-label-error');
  
  buttonAdd.addEventListener('click', (event)=> {
    const valueDesc = inputDesc.value;
    const valueName = inputName.value;
    const valuePhoto = inputPhoto.value;
    event.preventDefault();

    if (valueDesc === '' || valuePhoto === '' || valueName === '') 
    {
      labelMessageError.innerHTML = "¡Uy parece que has olvidado algo!";
    }
    else (!valueDesc === '' || !valuePhoto === '' || !valueName === '') 
    {
      labelMessageError.innerHTML = "Hola";
    }

  } );