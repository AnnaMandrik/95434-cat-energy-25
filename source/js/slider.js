//const slider = document.querySelector('.slider');
const sliderButton = document.querySelector('.slider__button');
const instanceLabelBefore = document.querySelector('.instance__label--after');
const instanceImage = document.querySelector('.instance__image');
const imageCat = document.querySelector('.image-cat');

// const getInstanceBeforeAfter = () => {
//   instanceLabel.addEventListener('click', handleChangeInstanceControl);
// }

// function handleChangeInstanceControl() {
//   if (instanceLabel.classList.contains('instance__label--after')) {
//     instanceImage.style.display = 'none';
//     imageCat.style.display = 'inline';
//     sliderButton.style.right = '24px';

//   } else {
//     instanceImage.style.display = 'inline';
//     imageCat.style.display = 'none';
//     sliderButton.style.right = '0';
//   }
// }
const getInstanceBefore = () => {
  instanceLabelBefore.addEventListener('click', function() {
    if (instanceLabel.classList.contains('instance__label--after')) {
      instanceImage.style.display = 'none';
      imageCat.style.display = 'inline';
      sliderButton.style.right = '24px';

    } else {
      instanceImage.style.display = 'inline';
      imageCat.style.display = 'none';
      sliderButton.style.right = '0';
    }
});

}



// const getSliderMove = () => {
//   console.log('hello world');
//   sliderButton.onmousedown = function(event) {
//     event.preventDefault();

//     const shiftX = event.clientX - sliderButton.getBoundingClientRect().left;

//     document.addEventListener('mousemove', onMouseMove);
//     document.addEventListener('mouseup', onMouseUp);

//     function onMouseMove(event) {
//       const newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

//       if (newLeft < 0) {
//         newLeft = 0;
//       }
//       const rightEdge = slider.offsetWidth - sliderButton.offsetWidth;
//       if (newLeft > rightEdge) {
//         newLeft = rightEdge;
//       }

//       sliderButton.style.left = newLeft + 'px';
//     }

//     function onMouseUp() {
//       document.removeEventListener('mouseup', onMouseUp);
//       document.removeEventListener('mousemove', onMouseMove);
//     }
//   }

//   sliderButton.ondragstart = function() {
//     return false;
//   }
// }
export default {getInstanceBefore}
