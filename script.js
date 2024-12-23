document.addEventListener('DOMContentLoaded', () => {
  const loadingSpinner = document.getElementById('loadingSpinner');
  const animalsContainer = document.getElementById('animals');
  const searchBar = document.getElementById('searchBar');
  const searchButton = document.getElementById('searchButton');

  let cachedData = [];

  function renderAnimals(animals) {
    animalsContainer.innerHTML = '';
    if (animals.length === 0) {
      animalsContainer.innerHTML = '<p>No animals found.</p>';
      return;
    }

    animals.forEach(animal => {
      const card = document.createElement('div');
      card.classList.add('animal-card');

      const img = document.createElement('img');
      img.src = animal['Image Link'] || 'placeholder.jpg';
      img.alt = `Image of ${animal.Name}`;
      card.appendChild(img);

      const name = document.createElement('h3');
      name.textContent = animal.Name;

      const link = document.createElement('a');
      link.href = `details.html?id=${animal.id}`;
      link.textContent = 'View Details';
      link.style.textDecoration = 'none';

      card.appendChild(name);
      card.appendChild(link);

      animalsContainer.appendChild(card);
    });
  }

  function fetchData() {
    loadingSpinner.style.display = 'block';
    fetch('animals.json')
      .then(res => res.json())
      .then(data => {
        cachedData = data;
        renderAnimals(cachedData);
        loadingSpinner.style.display = 'none';
      })
      .catch(() => {
        loadingSpinner.style.display = 'none';
        animalsContainer.innerHTML = '<p>Failed to load data.</p>';
      });
  }

  searchButton.addEventListener('click', () => {
    const query = searchBar.value.toLowerCase();
    const filtered = cachedData.filter(animal =>
      animal.Name.toLowerCase().includes(query)
    );
    renderAnimals(filtered);
  });

  fetchData();
});
