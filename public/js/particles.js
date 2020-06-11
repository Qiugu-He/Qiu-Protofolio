window.onload = function () {
  Particles.init({
    // normal options
    selector: '.animation',
    maxParticles: 110,
    color: '#FFFFFF',
    connectParticles: true,

    // options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 60,
          color: '#FFFFFF',
          connectParticles: true
        }
      }
      , {
        breakpoint: 525,
        options: {
          maxParticles: 40,
          connectParticles: true
        }
      }, {
        breakpoint: 320,
        options: {
          maxParticles: 25
        }
      }
    ]
  });
};

