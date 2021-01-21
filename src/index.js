/* eslint-disable no-plusplus */
import './style.css';
import init from './initialRender';
import { displayImg } from './displayImage';

init();

let autoSlide = setInterval(() => {
  displayImg(1, 'active');
}, 5000);

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
nextBtn.addEventListener('click', () => {
  clearInterval(autoSlide);
  setTimeout(() => {
    autoSlide = setInterval(() => {
      displayImg(1, 'active');
    }, 5000);
  }, 10000);
});
prevBtn.addEventListener('click', () => {
  clearInterval(autoSlide);
  setTimeout(() => {
    autoSlide = setInterval(() => {
      displayImg(1, 'active');
    }, 5000);
  }, 10000);
});

const dots = document.getElementsByClassName('dot');
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', () => {
    clearInterval(autoSlide);
    setTimeout(() => {
      autoSlide = setInterval(() => {
        displayImg(1, 'active');
      }, 5000);
    }, 10000);
  });
}
