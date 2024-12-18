document.addEventListener('DOMContentLoaded', () => {
    const animalDetailsContainer = document.getElementById('animalDetails');
    const selectedAnimal = JSON.parse(localStorage.getItem('selectedAnimal'));
  
    if (selectedAnimal) {
      // Create the animal detail card
      const animalCard = document.createElement('div');
      animalCard.classList.add('animal-card');
  
      // Display image or "TBA" fallback
      if (selectedAnimal['Image Link']) {
        const img = document.createElement('img');
        img.src = selectedAnimal['Image Link'];
        img.alt = `Image of ${selectedAnimal.Name}`;
        animalCard.appendChild(img);
      } else {
        const tbaDiv = document.createElement('div');
        tbaDiv.classList.add('tba');
        tbaDiv.textContent = 'TBA';
        animalCard.appendChild(tbaDiv);
      }
  
      // Animal name
      const nameElement = document.createElement('h3');
      nameElement.textContent = selectedAnimal.Name;
      animalCard.appendChild(nameElement);
  
      // Scientific name
      const scientificNameElement = document.createElement('p');
      scientificNameElement.textContent = selectedAnimal['Scientific Name'];
      animalCard.appendChild(scientificNameElement);
  
      animalDetailsContainer.appendChild(animalCard);
    } else {
      animalDetailsContainer.innerHTML = '<p>Animal details not found.</p>';
    }
  
    // Back button functionality
    document.getElementById('backButton').addEventListener('click', () => {
      window.location.href = 'index.html'; // Redirect back to main page
    });
  });
  