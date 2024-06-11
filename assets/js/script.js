const apiKey = 'YOUR_API_KEY';
const parkCode = 'acad';

fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${apiKey}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
