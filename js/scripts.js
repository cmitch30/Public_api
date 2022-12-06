let employees = [];
const url = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`;
const body = document.querySelector("body");
const cards = document.querySelectorAll(".card");
const searchContainer = document.querySelector(".search-container");
const searchInput = document.createElement("input");
const submitInput = document.createElement("input");
searchInput.type = "search";
searchInput.setAttribute("id", "search-input");
searchInput.className = "search-input";
searchInput.placeholder = "Search...";

submitInput.type = "submit";
submitInput.value = "🔍";
submitInput.setAttribute("id", "search-submit");
submitInput.className = "search-submit";

const form = document.createElement("form");
form.action = "#";
form.method = "get";
form.appendChild(searchInput);
form.appendChild(submitInput);
searchContainer.append(form);

const inputField = document.getElementById("search-input");

fetch(url)
  .then((res) => res.json())
  .then((data) => data.results)
  .then(directory);

function directory(employee) {
  employees = employee;
  let galleryHTML = ``;
  employees.forEach((employee, index) => {
    galleryHTML += `<div class="card" data-index ='${index}'>
            <div class="card-img-container">
                <img class="card-img" src="${employee.picture.large}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
                <p class="card-text">${employee.email}</p>
                <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
            </div>
        </div>`;
  });
  gallery.insertAdjacentHTML("beforeend", galleryHTML);
}

gallery.addEventListener("click", (e) => {
  if (e.target.closest(".card")) {
    const card = e.target.closest(".card");
    const index = Number(card.getAttribute("data-index"));
    console.log(employees[index]);
    modal(index);
  }
});

function modal(index) {
 const data = employees[index]
 console.log(data)
  let date = new Date(data.dob.date);

  const modalHTML = `
    <div class="modal-container data-index="${index}">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                    <img class="modal-img" src="${
                      data.picture.medium
                    }" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${data.name.first} ${
    data.name.last
  }</h3>
                    <p class="modal-text">${data.email}</p>
                    <p class="modal-text cap">${data.city}</p>
                    <hr>
                    <p class="modal-text">${data.phone}</p>
                    <p class="modal-text">${data.location.street.number} ${
    data.location.street.name
  }, ${data.location.city}, ${data.location.state} ${data.location.postcode}</p>
                    <p class="modal-text">Birthday:  ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
            </div>
        </div>
    </div>
    `;
  gallery.insertAdjacentHTML("afterend", modalHTML);
}

inputField.addEventListener("keyup", (e) => {
  let currentValue = e.target.value.toLowerCase();
  const names = document.querySelectorAll("h3.card-name");
  names.forEach((name) => {
    if (name.textContent.toLowerCase().includes(currentValue)) {
      name.parentNode.parentNode.style.display = "block";
    } else {
      name.parentNode.parentNode.style.display = "none";
    }
  });
});

body.addEventListener("click", (e) => {
  if (e.target.textContent === "X") {
    const container = document.querySelector(".modal-container");
    container.parentNode.removeChild(container);
  }
});
