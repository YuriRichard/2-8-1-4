document.addEventListener('DOMContentLoaded', function() {
  const keySound = new Audio('/audio/key-sound.mp3'); // adicione o som de teclas aqui
  const navSound = new Audio('/audio/nav-sound.mp3'); // adicione o som de navegador aqui

  document.addEventListener('keydown', function() {
    keySound.play();
  });

  document.addEventListener('click', function() {
    navSound.play();
  });
});
