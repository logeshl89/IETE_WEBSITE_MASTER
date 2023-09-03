document.addEventListener('DOMContentLoaded', () => {
    const studentsCounter = document.getElementById('studentsCounter');
    const staffCounter = document.getElementById('staffCounter');
    const eventsCounter = document.getElementById('eventsCounter');
    const collegesCounter = document.getElementById('collegesCounter');
  
    animateValue(studentsCounter, 0, 12060, 3000);
    animateValue(staffCounter, 0, 13592, 3000);
    animateValue(eventsCounter, 0, 42, 400);
    animateValue(collegesCounter, 0, 15, 400);
  
    const counterItems = document.querySelectorAll('.counter-item');
  
    function animateValue(element, start, end, duration) {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const currentValue = Math.floor(start + percentage * (end - start));
        element.textContent = currentValue;
        if (percentage < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  
    function animateCounterExit() {
      counterItems.forEach(item => {
        item.style.animation = 'counter-exit 0.1s forwards';
      });
    }
  
    window.addEventListener('beforeunload', animateCounterExit);
  });
  