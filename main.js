document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', function() {
      window.open(this.getAttribute('data-url'), '_blank');
    });
  });