const imgUrlInput = document.querySelector('#img-url');
  const previewImg = document.querySelector('#preview');

  imgUrlInput.addEventListener('input', function() {
    const url = this.value;
    if (url.trim() !== '') {
      previewImg.src = url;
    } else {
      previewImg.src = 'https://via.placeholder.com/150?text=No+Image';
    }
  });