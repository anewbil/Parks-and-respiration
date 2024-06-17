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