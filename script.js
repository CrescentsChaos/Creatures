document.addEventListener('DOMContentLoaded', () => {
  const loadingSpinner = document.getElementById('loadingSpinner');
  const animalsContainer = document.getElementById('animals');
  const searchBar = document.getElementById('searchBar');
  const searchButton = document.getElementById('searchButton');

  function renderAnimals(animals) {
    animalsContainer.innerHTML = '';
    if (animals.length === 0) {
      animalsContainer.innerHTML = '<p>No animals found.</p>';
      return;
    }

    animals.forEach(animal => {
      const card = document.createElement('div');
      card.classList.add('animal-card');

      const imgContainer = document.createElement('div');
      imgContainer.classList.add('image-container');

      if (animal['Image Link']) {
        const img = document.createElement('img');
        img.src = animal['Image Link'];
        img.alt = `Image of ${animal.Name}`;
        imgContainer.appendChild(img);
      } else {
        imgContainer.textContent = 'TBA';
      }

      const name = document.createElement('h3');
      name.textContent = animal.Name;

      const sciName = document.createElement('p');
      sciName.textContent = animal['Scientific Name'];

      card.appendChild(imgContainer);
      card.appendChild(name);
      card.appendChild(sciName);

      animalsContainer.appendChild(card);
    });
  }

  function fetchData() {
    loadingSpinner.style.display = 'block';
    fetch('animals.json')
      .then(res => res.json())
      .then(data => {
        loadingSpinner.style.display = 'none';
        renderAnimals(data);
      })
      .catch(() => {
        loadingSpinner.style.display = 'none';
        animalsContainer.innerHTML = '<p>Failed to load data.</p>';
      });
  }

  searchButton.addEventListener('click', () => {
    const query = searchBar.value.toLowerCase();
    // Filter logic here
  });

  fetchData();
});
