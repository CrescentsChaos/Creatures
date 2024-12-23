document.addEventListener('DOMContentLoaded', () => {
  const detailsContainer = document.getElementById('animalDetails');
  const backButton = document.getElementById('backButton');

  backButton.addEventListener('click', () => {
    window.history.back();
  });

  const urlParams = new URLSearchParams(window.location.search);
  const animalId = urlParams.get('id');

  if (!animalId) {
    detailsContainer.innerHTML = '<p>Animal details not found.</p>';
    return;
  }

  fetch(`api/animals/${animalId}.json`)
    .then(response => response.json())
    .then(animal => {
      detailsContainer.innerHTML = `
        <h2>${animal.Name}</h2>
        <img src="${animal['Image Link']}" alt="Image of ${animal.Name}">
        <p><strong>Scientific Name:</strong> ${animal['Scientific Name']}</p>
        <p><strong>Description:</strong> ${animal.Description}</p>
      `;
    })
    .catch(() => {
      detailsContainer.innerHTML = '<p>Failed to load animal details.</p>';
    });
});
