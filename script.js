import { faker } from '@faker-js/faker/locale/en_US';



function createUserCard(firstName, lastName, address, city, state, zip, phone, dob, job, email, gender, zodiac) {
  const idCard = document.createElement("div");
  idCard.id = "idCard";

  const fullName = `${firstName} ${lastName}`;

  idCard.innerHTML = `
      <div class="avatar">
        <i class="fa fa-user" aria-hidden="true"></i>
      </div>
      <h3>${fullName}</h3>
      <p class="capitalize"> ${gender} | <span>${zodiac}</span></p>
      <p>Address: ${address}</p>
      <p>City: ${city}</p>
      <p>State: ${state}, ${zip}</p>
      <p>Phone: ${phone}</p>
      <p>Date of Birth: ${dob}</p>
      <p>Job: ${job}</p>
      <p>Email: ${email}</p>
    `;

  return idCard;
}

function renderIDCard() {
  const firstNameInput = document.querySelector("#firstNameInput");
  const lastNameInput = document.querySelector("#lastNameInput");
  const idCardContainer = document.querySelector("#idCardContainer");
  const errorContainer = document.querySelector("#errorContainer");

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  if (firstName === "" || lastName === "") {
    errorContainer.textContent = "Please enter both first name and last name.";
    return;
  }
  const genderSelect = document.querySelector("#genderSelect");
  const gender = genderSelect.value;

  if (gender === "") {
    errorContainer.textContent = "Please select a gender.";
    return;
  }
  errorContainer.textContent = ""; // Clear the error message

  const address = faker.location.streetAddress({ useFullAddress: true });
  const city = faker.location.city()
  const state = faker.location.state({ abbreviated: true })
  const zip = faker.location.zipCode({ state }) 
  const phone = faker.phone.number();
  const dob = faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toLocaleDateString("en-US");
  const job = faker.person.jobTitle();
  const email = faker.internet.email({firstName, lastName })
  const zodiac = faker.person.zodiacSign()

  const idCard = createUserCard(
    firstName.toUpperCase(),
    lastName.toUpperCase(),
    address,
    city,
    state,
    zip,
    phone,
    dob,
    job,
    email,
    gender,
    zodiac
  );

  const existingIdCard = idCardContainer.querySelector("#idCard");
  if (existingIdCard) {
    idCardContainer.replaceChild(idCard, existingIdCard);
  } else {
    idCardContainer.appendChild(idCard);
  }

  idCardContainer.style.display = "block";
}

document.querySelector("#generateBtn").addEventListener("click", renderIDCard);
