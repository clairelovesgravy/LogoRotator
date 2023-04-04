const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];
  
  let inputBuffer = [];
  
  function findLogo() {
    const images = document.getElementsByTagName('img');
    for (let img of images) {
      if (img.alt.toLowerCase().includes('logo') || img.src.toLowerCase().includes('logo')) {
        return img;
      }
    }
    return null;
  }
  
  function rotateLogo(logo) {
    logo.style.transition = 'transform 2s';
    logo.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      logo.style.transition = '';
      logo.style.transform = '';
    }, 2000);
  }
  
  document.addEventListener('keydown', (event) => {
    inputBuffer.push(event.code);
    if (inputBuffer.length > KONAMI_CODE.length) {
      inputBuffer.shift();
    }
  
    if (inputBuffer.join('') === KONAMI_CODE.join('')) {
      const logo = findLogo();
      if (logo) {
        rotateLogo(logo);
      }
    }
  });
  