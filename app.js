const caretakers = JSON.parse(localStorage.getItem('caretakers') || '[]');
const patients = JSON.parse(localStorage.getItem('patients') || '[]');

function saveData() {
  localStorage.setItem('caretakers', JSON.stringify(caretakers));
  localStorage.setItem('patients', JSON.stringify(patients));
}

function registerCaretaker() {
  const name = document.getElementById('caretaker-name').value;
  const phone = document.getElementById('caretaker-phone').value;
  const location = document.getElementById('caretaker-location').value;
  const skills = document.getElementById('caretaker-skills').value;
  if (!name || !phone) {
    alert('Please fill in required fields.');
    return;
  }
  caretakers.push({ name, phone, location, skills });
  saveData();
  showCaretakers();
  document.getElementById('caretaker-name').value = '';
  document.getElementById('caretaker-phone').value = '';
  document.getElementById('caretaker-location').value = '';
  document.getElementById('caretaker-skills').value = '';
}

function registerPatient() {
  const name = document.getElementById('patient-name').value;
  const phone = document.getElementById('patient-phone').value;
  const location = document.getElementById('patient-location').value;
  const needs = document.getElementById('patient-needs').value;
  if (!name || !phone) {
    alert('Please fill in required fields.');
    return;
  }
  patients.push({ name, phone, location, needs });
  saveData();
  document.getElementById('patient-name').value = '';
  document.getElementById('patient-phone').value = '';
  document.getElementById('patient-location').value = '';
  document.getElementById('patient-needs').value = '';
}

function showCaretakers() {
  const list = document.getElementById('caretaker-list');
  if (!list) return;
  list.innerHTML = '';
  caretakers.forEach((c, index) => {
    const li = document.createElement('li');
    li.textContent = `${c.name} - ${c.location} - ${c.phone} - ${c.skills}`;
    list.appendChild(li);
  });
}

// Initialize list on page load
showCaretakers();
