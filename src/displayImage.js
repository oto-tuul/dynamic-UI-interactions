let i = 0;
// const slideContent = document.getElementById('slideContent');
// const images = slideContent.children;
// let length = images.length;

const displayImg = function displayGalleryImage(a, animation) {
  const slideContent = document.getElementById('slideContent');
  const images = slideContent.children;
  const dots = document.getElementsByClassName('dot');

  // images[i].classList.remove('active');
  // images[i].classList.remove('reverse');

  for (let j = 0; j < images.length; j++) {
    images[j].classList.remove('active');
    images[j].classList.remove('reverse');
  }

  if (a < 0) {
    if (i < 0) {
      i = images.length - 1;
    } else if (i > images.length - 1) {
      i = 0;
    }

    let zValueCurrentItem = parseInt(images[i].style.zIndex, 10);
    let zValuePreviousItem;

    if (i - 1 < 0) {
      zValuePreviousItem = parseInt(images[images.length - 1].style.zIndex, 10);
    } else {
      zValuePreviousItem = parseInt(images[i - 1].style.zIndex, 10);
    }

    zValueCurrentItem += 1;
    images[i].style.zIndex = zValueCurrentItem;

    for (let j = 0; j < images.length; j++) {
      let index = i - 1;
      if (i - 1 < 0) {
        index = images.length - 1;
      }
      if (images[index] !== images[j]) {
        while (!(zValuePreviousItem > parseInt(images[j].style.zIndex, 10))) {
          zValuePreviousItem += 1;
          if (i - 1 < 0) {
            images[images.length - 1].style.zIndex = zValuePreviousItem;
          } else {
            images[i - 1].style.zIndex = zValuePreviousItem;
          }
        }
      }
    }

    for (let j = 0; j < images.length; j++) {
      if (images[i] !== images[j]) {
        while (!(zValueCurrentItem > parseInt(images[j].style.zIndex, 10))) {
          zValueCurrentItem += 1;
          images[i].style.zIndex = zValueCurrentItem;
        }
      }
    }

    images[i].classList.toggle(`${animation}`);

    i += a;
    if (i < 0) {
      i = images.length - 1;
    } else if (i > images.length - 1) {
      i = 0;
    }

    setTimeout(() => {
      slideContent.style.width = images[i].width + 'px';
    }, 300);

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('selected');
    }
    dots[i].classList.toggle('selected');

    return;
  }

  i += a;
  if (i < 0) {
    i = images.length - 1;
  } else if (i > images.length - 1) {
    i = 0;
  }
  let zValueCurrentItem = parseInt(images[i].style.zIndex, 10);
  zValueCurrentItem += 1;
  images[i].style.zIndex = zValueCurrentItem;

  for (let j = 0; j < images.length; j++) {
    if (images[i] !== images[j]) {
      while (!(zValueCurrentItem > parseInt(images[j].style.zIndex, 10))) {
        zValueCurrentItem += 1;
        images[i].style.zIndex = zValueCurrentItem;
      }
    }
  }
  if (a > 0) {
    images[i].classList.toggle(`${animation}`);
  }

  setTimeout(() => {
    slideContent.style.width = images[i].width + 'px';
  }, 500);

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('selected');
  }
  dots[i].classList.toggle('selected');
};

const displaySelectImg = function displaySelectedImage(n) {
  const slideContent = document.getElementById('slideContent');
  const images = slideContent.children;
  const dots = document.getElementsByClassName('dot');
  let zValueCurrentItem = parseInt(images[i].style.zIndex, 10);
  let zValueSelectedItem = parseInt(images[n].style.zIndex, 10);

  for (let j = 0; j < images.length; j++) {
    images[j].classList.remove('active');
    images[j].classList.remove('reverse');
  }

  if (n > i) {
    if (n > i + 1) {
      zValueCurrentItem += 1;
      images[n].style.zIndex = zValueCurrentItem;
      images[n - 1].classList.add('active');
      images[n].classList.add('active');
    }
    zValueCurrentItem += 1;
    images[n].style.zIndex = zValueCurrentItem;
    images[n].classList.add('active');
  } else {
    images[i].classList.add('reverse');
    for (let j = 0; j < images.length; j++) {
      if (images[n] !== images[j]) {
        while (!(zValueCurrentItem > parseInt(images[j].style.zIndex, 10))) {
          zValueCurrentItem += 1;
          images[n].style.zIndex = zValueCurrentItem;
        }
      }
    }

    for (let j = 0; j < images.length; j++) {
      if (images[i] !== images[j]) {
        while (!(zValueCurrentItem > parseInt(images[j].style.zIndex, 10))) {
          zValueCurrentItem += 1;
          images[i].style.zIndex = zValueCurrentItem;
        }
      }
    }
  }
  i = n;

  setTimeout(() => {
    slideContent.style.width = images[i].width + 'px';
  }, 500);

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('selected');
  }
  dots[n].classList.toggle('selected');
};

export { displayImg, displaySelectImg };
