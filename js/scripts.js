let employees = [];
const url = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`;
modal()
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
  employees.forEach((employee) => {
    galleryHTML += `<div class="card">
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

function modal() {
       let modalHTML = `<div class="modal-container" style="display: none" data-index="">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img id="img" class="modal-img" src="" alt="profile picture">
                <h3 id="name" class="modal-name cap"></h3>
                <p id="email" class="modal-text"></p>
                <p id="city" class="modal-text cap"></p>
                <hr>
                <p id="cell" class="modal-text"></p>
                <p id="address" class="modal-text"></p>
                <p id="birthday" class="modal-text">Birthday: </p>
            </div>
        </div>
        <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next" class="modal-next btn">Next</button>
        </div>
    </div>`;
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



gallery.addEventListener('click', (e) => {

})