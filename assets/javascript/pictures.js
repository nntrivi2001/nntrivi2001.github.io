const modal = parent.document.getElementById('modal');
const fullscreen_img = parent.document.getElementById('fs-img');
const imgs = document.querySelectorAll('#photos img');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullscreen_img.src = this.getAttribute("src");
    modal.style.display = 'block';
    console.log('Hello')
  });
});