const passField = document.querySelector('#pass-field');
  const toggleCheckbox = document.querySelector('#toggle-pass');

  toggleCheckbox.addEventListener('change', function() {
    if (this.checked) {
      passField.type = 'text';
    } else {
      passField.type = 'password';
    }
  });
