window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.images-parallax__mount');
    const scrolled = window.scrollY;
    parallax.style.transform = `translateY(-${scrolled * 0.05}px)`;
  });

window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.images-parallax__back');
    const scrolled = window.scrollY;
    parallax.style.transform = `translateY(-${scrolled * 0.2}px)`;
  });

window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.images-parallax__kazakhstan');
    const scrolled = window.scrollY;
    parallax.style.transform = `translateY(-${scrolled * 0.45}px)`;
  });

  window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.images-parallax__hill');
    const scrolled = window.scrollY;
    parallax.style.transform = `translateY(-${scrolled * 0.57}px)`;
  });

  window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.images-parallax__trees');
    const scrolled = window.scrollY;
    parallax.style.transform = `translateY(-${scrolled * 0.8}px)`;
  });

  window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.images-parallax__eagle');
    const scrolled = window.scrollY;
    parallax.style.transform = `translateX(-${scrolled / 0.7}px)`;
  });

  window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.images-parallax__eagle');
    const scrolled = window.scrollY;
    parallax.style.transform = `translateY(-${scrolled * -0.5}px)`;
  });

  function playClickSound() {
    var clickSound = document.getElementById("clickSound");
    clickSound.play();
}

const playSoundButton = document.getElementById('playSoundButton');
  const audio = document.getElementById('audio');

  playSoundButton.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  });
  