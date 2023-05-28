function createUserCard(firstName, lastName, address, phone, dob, job) {
    const idCard = document.createElement('div');
    idCard.id = 'idCard';
  
    const fullName = `${firstName} ${lastName}`;
  
    idCard.innerHTML = `
      <div class="avatar">
        <i class="fa fa-user" aria-hidden="true"></i>
      </div>
      <h3>${fullName}</h3>
      <p>Address: ${address}</p>
      <p>Phone: ${phone}</p>
      <p>Date of Birth: ${dob}</p>
      <p>Job: ${job}</p>
    `;
  
    return idCard;
  }
  
  function renderIDCard() {
    const firstNameInput = document.querySelector('#firstNameInput');
    const lastNameInput = document.querySelector('#lastNameInput');
    const idCardContainer = document.querySelector('#idCardContainer');
  
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
  
    if ([firstName, lastName].some(value => value === '')) {
      idCardContainer.style.display = 'none';
      return;
    }
  
    const address = faker.address.streetAddress();
    const phone = faker.phone.phoneNumber();
    const dob = faker.date.past().toLocaleDateString('en-US');
    const job = faker.name.jobTitle();
  
    const idCard = createUserCard(firstName.toUpperCase(), lastName.toUpperCase(), address, phone, dob, job);
  
    const existingIdCard = idCardContainer.querySelector('#idCard');
    if (existingIdCard) {
      idCardContainer.replaceChild(idCard, existingIdCard);
    } else {
      idCardContainer.appendChild(idCard);
    }
  
    idCardContainer.style.display = 'block';
  }
  
  document.querySelector('#generateBtn').addEventListener('click', renderIDCard);
  