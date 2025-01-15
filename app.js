fetch('https://raw.githubusercontent.com/Ohm-Np/ex-data/main/vector/kanchanpur.geojson')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Loaded GeoJSON:', data);
    // Process or render your GeoJSON data here
  })
  .catch(error => console.error('Error loading GeoJSON:', error));
