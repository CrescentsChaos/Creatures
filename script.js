// Fetch the animals data from the animals.json file
fetch('animals.json')
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    const animalsContainer = document.getElementById('animals');

    // Check if the data is empty
    if (data.length === 0) {
      animalsContainer.innerHTML = '<p>No animals found.</p>';
      return;
    }

    // Loop through each animal and create the HTML structure for each
    data.forEach(animal => {
      const animalCard = document.createElement('div');
      animalCard.classList.add('animal-card');

      animalCard.innerHTML = `
        <img src="${animal['Image Link']}" alt="${animal.Name}">
        <h3>${animal.Name}</h3>
        <p>${animal['Scientific Name']}</p>
      `;

      animalsContainer.appendChild(animalCard);
    });
  })
  .catch(error => {
    console.error('Error fetching animal data:', error);
    document.getElementById('animals').innerHTML = '<p>Failed to load animal data.</p>';
  });
