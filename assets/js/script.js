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
         
          window.location.href = 'index2.html';
      } else {
          alert('Please enter a valid park name.');
      }
  });
});
document.addEventListener('DOMContentLoaded', function () {
    
    var modalButtons = document.querySelectorAll('.modal-button');
  
    modalButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var target = button.getAttribute('data-target'); 
        var modal = document.getElementById(target);
  
        modal.classList.toggle('is-active');
      });
    });
  
    document.querySelectorAll('.modal-close').forEach(function (closeBtn) {
      closeBtn.addEventListener('click', function () {
        closeBtn.closest('.modal').classList.remove('is-active');
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(function (modal) {
          if (modal.classList.contains('is-active')) {
            modal.classList.remove('is-active');
          }
        });
      }
    });
  });
