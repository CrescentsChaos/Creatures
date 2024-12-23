const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

// Open the SQLite database
const db = new sqlite3.Database('Creatures.db');

// Query to fetch data from the Animals table
const query = "SELECT Name, `Scientific Name`, `Image Link` FROM Animals";

// Fetch data and write it to a JSON file
db.all(query, [], (err, rows) => {
    if (err) {
        throw err;
    }

    // Write data to a JSON file
    fs.writeFileSync('animals.json', JSON.stringify(rows, null, 2), 'utf-8');
    console.log('Data exported to animals.json');
});

// Close the database connection
db.close();
