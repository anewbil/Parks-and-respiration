document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.querySelector("#searchButton");
  const searchInput = document.querySelector("#searchBox");

  const parkCodeMap = {
      'acadia': 'acad',
      'yellowstone': 'yell',
      'yosemite': 'yose',
      'grand canyon': 'grca',
      'adams': 'adam'
      
  };

  searchButton.addEventListener("click", function(event) {
      event.preventDefault();
      let parkName = searchInput.value.trim().toLowerCase();
      if (parkName && parkCodeMap[parkName]) {
          
          localStorage.setItem('parkName', parkName);
          localStorage.setItem('parkCode', parkCodeMap[parkName]);
          // Redirect to the results page
          window.location.href = 'index2.html';
      } else {
          alert('Please enter a valid park name.');
      }
  });
});
