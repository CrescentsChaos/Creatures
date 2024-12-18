/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  color: #333;
  line-height: 1.6;
  padding: 10px;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

/* Header */
h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #007BFF;
  text-transform: uppercase;
}

/* Search Section */
.search-section {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

#searchBar {
  padding: 12px;
  font-size: 1em;
  border: 2px solid #007BFF;
  border-radius: 8px 0 0 8px;
  width: 300px;
  outline: none;
}

#searchButton {
  padding: 12px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
}

#searchButton:hover {
  background-color: #ff6b6b;
}

/* Loading Spinner */
#loadingSpinner {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 8px solid #f3f3f3;
  border-top: 8px solid #007BFF;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Animal Cards */
.animals-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.animal-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animal-card img {
  width: 100%;
  height: 250px;
  object-fit: contain;
  border-bottom: 2px solid #007BFF;
}

.animal-card .tba {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  background: #f0f0f0;
  color: #666;
  font-size: 1.2em;
  font-weight: bold;
}

/* Back Button */
#backButton {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

#backButton:hover {
  background-color: #0056b3;
}
