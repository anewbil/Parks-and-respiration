document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.querySelector("#searchButton");
  const searchInput = document.querySelector("#searchBox");
  const parkCodeMap = {
      'acadia': 'acad',
      'yellowstone': 'yell',
      'yosemite': 'yose',
      'grand canyon': 'grca',
      'adams': 'adam',
      'american samoa': 'npsa',
      'arches': 'arch',
      'badlands': 'badl',
      'big bend': 'bibe',
      'biscayne': 'bisc',
      'black canyon of the gunnison': 'blca',
      'bryce canyon': 'brca',
      'canyonlands': 'cany',
      'capitol reef': 'care',
      'carlsbad caverns': 'cave',
      'channel islands': 'chis',
      'congaree': 'cong',
      'crater lake': 'crla',
      'cuyahoga valley': 'cuva',
      'death valley': 'deva',
      'denali': 'dena',
      'dry tortugas': 'drto',
      'everglades': 'ever',
      'gates of the arctic': 'gaar',
      'gateway arch': 'jeff',
      'glacier': 'glac',
      'glacier bay': 'glba',
      'grand teton': 'grte',
      'great basin': 'grba',
      'great sand dunes': 'grsa',
      'great smoky mountains': 'grsm',
      'guadalupe mountains': 'gumo',
      'haleakalā': 'hale',
      'hawaii volcanoes': 'havo',
      'hot springs': 'hosp',
      'indiana dunes': 'indu',
      'isle royale': 'isro',
      'joshua tree': 'jotr',
      'katmai': 'katm',
      'kenai fjords': 'kefj',
      'kings canyon': 'kica',
      'kobuk valley': 'kova',
      'lake clark': 'lacl',
      'lassen volcanic': 'lavo',
      'mammoth cave': 'maca',
      'mesa verde': 'meve',
      'mount rainier': 'mora',
      'new river gorge': 'neri',
      'north cascades': 'noca',
      'olympic': 'olym',
      'petrified forest': 'pefo',
      'pinnacles': 'pinn',
      'redwood': 'redw',
      'rocky mountain': 'romo',
      'saguaro': 'sagu',
      'sequoia': 'sequ',
      'shenandoah': 'shen',
      'theodore roosevelt': 'thro',
      'virgin islands': 'viis',
      'voyageurs': 'voya',
      'white sands': 'whsa',
      'wind cave': 'wica',
      'wrangell-st. elias': 'wrst',
      'zion': 'zion'
      

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
