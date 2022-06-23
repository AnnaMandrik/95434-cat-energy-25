const slider = document.querySelector('.slider');
const sliderButton = slider.querySelector('.slider__button');

const getSliderMove = () => {
  console.log('hello world');
  sliderButton.onmousedown = function(event) {
    event.preventDefault();

    const shiftX = event.clientX - sliderButton.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      const newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

      if (newLeft < 0) {
        newLeft = 0;
      }
      const rightEdge = slider.offsetWidth - sliderButton.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      sliderButton.style.left = newLeft + 'px';
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  }

  sliderButton.ondragstart = function() {
    return false;
  }
}

export {getSliderMove};
