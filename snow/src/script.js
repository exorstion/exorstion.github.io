document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow');
    const snowflakesCount = 100; // Adjust number of snowflakes
  
    for (let i = 0; i < snowflakesCount; i++) {
      const flake = document.createElement('div');
      flake.classList.add('flake');
      flake.style.left = `${Math.random() * 100}vw`;
      flake.style.animationDuration = `${Math.random() * 5 + 10}s`;
      flake.style.width = `${Math.random() * 10 + 5}px`;
      flake.style.height = flake.style.width;
      snowContainer.appendChild(flake);
    }
  });
  