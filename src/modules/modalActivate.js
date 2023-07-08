import { changeModalUIElements } from "./weatherClassConstructor";
import { weatherObjectArray } from "..";
import { currentCity } from "..";
import { currentCondition } from "..";

function modal() {
  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const form = document.getElementById("newtask");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      
      changeModalUIElements(weatherObjectArray, currentCity);

      updateModalBackgroundImage()

      openModal(modal);
    });
  });

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
    //   formReset();
  }

  // form.addEventListener("submit", (event) => {
  //     // event.preventDefault();
  //     // myLibrary.newNote(event, index);
  //     // pushtoDom();

  //     // localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  //   });
}

export default modal;

function updateModalBackgroundImage() {
  const bodyElement = document.querySelector('.border-shape');
  const lowercaseCondition = currentCondition.toLowerCase().replace(/\s/g, ' ');

  if (lowercaseCondition.includes('clear')) {
    // bodyElement.style.backgroundColor = 'yellow';
    bodyElement.style.backgroundImage = 'url("weather-images/sun.png")';
  } else if (lowercaseCondition.includes('sunny')) {
    // bodyElement.style.backgroundColor = 'orange';
    bodyElement.style.backgroundImage = 'url("weather-images/sun.png")';
  } else if (lowercaseCondition.includes('partly cloudy')) {
    // bodyElement.style.backgroundColor = 'lightblue';
    bodyElement.style.backgroundImage = 'url("weather-images/cloudy.png")'
  } else if (lowercaseCondition.includes('cloudy') || lowercaseCondition.includes('overcast')) {
    // bodyElement.style.backgroundColor = 'gray';
    bodyElement.style.backgroundImage = 'url("weather-images/cloudy.png")';


  } else if (lowercaseCondition.includes('mist')) {
    bodyElement.style.backgroundColor = 'lightgray';
  } else if (lowercaseCondition.includes('fog')) {
    bodyElement.style.backgroundColor = 'darkgray';
  } else if (lowercaseCondition.includes('haze')) {
    bodyElement.style.backgroundColor = 'lightyellow';
  } else if (lowercaseCondition.includes('smoke')) {
    bodyElement.style.backgroundColor = 'lightbrown';
  } else if (lowercaseCondition.includes('dust')) {
    bodyElement.style.backgroundColor = 'tan';
  } else if (lowercaseCondition.includes('sand')) {
    bodyElement.style.backgroundColor = 'sandybrown';
  } else if (lowercaseCondition.includes('rain') || lowercaseCondition.includes('showers')) {
    bodyElement.style.backgroundColor = 'lightblue';
  } else if (lowercaseCondition.includes('drizzle')) {
    bodyElement.style.backgroundColor = 'lightskyblue';
  } else if (lowercaseCondition.includes('thunderstorm')) {
    bodyElement.style.backgroundColor = 'darkblue';
  } else if (lowercaseCondition.includes('snow')) {
    bodyElement.style.backgroundColor = 'white';
  } else if (lowercaseCondition.includes('blowing snow')) {
    bodyElement.style.backgroundColor = 'lightgray';
  } else if (lowercaseCondition.includes('sleet')) {
    bodyElement.style.backgroundColor = 'lightslategray';
  } else if (lowercaseCondition.includes('freezing rain')) {
    bodyElement.style.backgroundColor = 'steelblue';
  } else if (lowercaseCondition.includes('ice pellets')) {
    bodyElement.style.backgroundColor = 'aliceblue';
  } 
  
  // else {
  //   bodyElement.style.backgroundColor = 'lightgreen';
  // }
}