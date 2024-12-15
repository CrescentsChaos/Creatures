// Fetch the animals data from the animals.json file
fetch('animals.json')
  .then(response => response.json())
  .then(data => {
    let animals = data;

    // Display the animals initially
    displayAnimals(animals);

    // Search functionality
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', () => {
      const query = searchBar.value.toLowerCase();
      const filteredAnimals = animals.filter(animal =>
        animal.Name.toLowerCase().includes(query) || animal['Scientific Name'].toLowerCase().includes(query)
      );
      displayAnimals(filteredAnimals);
    });

    // Sort functionality
    const sortButton = document.getElementById('sortButton');
    sortButton.addEventListener('click', () => {
      animals.sort((a, b) => a.Name.localeCompare(b.Name)); // Sort by Name (ascending)
      displayAnimals(animals);
    });
  })
  .catch(error => {
    console.error('Error fetching animal data:', error);
    document.getElementById('animals').innerHTML = '<p>Failed to load animal data.</p>';
  });

// Function to display animals
function displayAnimals(animals) {
  const animalsContainer = document.getElementById('animals');
  animalsContainer.innerHTML = ''; // Clear the container

  if (animals.length === 0) {
    animalsContainer.innerHTML = '<p>No animals found.</p>';
    return;
  }

  animals.forEach(animal => {
    const animalCard = document.createElement('div');
    animalCard.classList.add('animal-card');

    animalCard.innerHTML = `
      <img src="${animal['Image Link']}" alt="${animal.Name}">
      <h3>${animal.Name}</h3>
      <p>${animal['Scientific Name']}</p>
    `;

    animalsContainer.appendChild(animalCard);
  });
}
