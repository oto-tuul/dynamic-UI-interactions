import initListeners from './listeners';
import forest from './img/forest.jpg';
import mountain from './img/mountain.jpg';
import rice from './img/rice.jpg';

const init = function initialRender() {
  const content = document.getElementById('content');

  const navbar = document.createElement('div');
  navbar.id = 'navbar';
  content.appendChild(navbar);

  const hamburgerBar = document.createElement('a');
  hamburgerBar.href = '#';
  hamburgerBar.id = 'hamburgerBar';
  hamburgerBar.classList.add('icon');
  const faFaBar = document.createElement('i');
  faFaBar.classList.add('fa', 'fa-bars', 'fa-2x');
  hamburgerBar.appendChild(faFaBar);
  navbar.appendChild(hamburgerBar);

  const navbarTitle = document.createElement('p');
  navbarTitle.id = 'navbarTitle';
  navbarTitle.innerHTML = 'Pagename';
  navbar.appendChild(navbarTitle);

  const navbarList = document.createElement('ul');
  navbarList.id = 'navbarList';
  const navbarItem1 = document.createElement('li');
  const navbarItem1Link = document.createElement('a');
  navbarItem1Link.innerHTML = 'Home';
  navbarItem1Link.href = '#';
  navbarItem1.appendChild(navbarItem1Link);
  navbarList.appendChild(navbarItem1);
  const navbarItem2 = document.createElement('li');
  navbarItem2.id = 'Content';
  const navbarItem2Link = document.createElement('a');
  navbarItem2Link.innerHTML = 'Content';
  navbarItem2Link.href = '#';
  navbarItem2.appendChild(navbarItem2Link);
  navbarList.appendChild(navbarItem2);
  const navbarItem3 = document.createElement('li');
  const navbarItem3Link = document.createElement('a');
  navbarItem3Link.innerHTML = 'Contact';
  navbarItem3Link.href = '#';
  navbarItem3.appendChild(navbarItem3Link);
  navbarList.appendChild(navbarItem3);
  navbar.appendChild(navbarList);

  const dropDown = document.createElement('div');
  navbarItem2.appendChild(dropDown);
  dropDown.id = 'dropDown1';
  dropDown.classList.add('dropdown-hidden');

  const dropDownLink1 = document.createElement('a');
  dropDownLink1.innerHTML = 'Lorem';
  dropDownLink1.href = '#';
  dropDown.appendChild(dropDownLink1);
  const dropDownLink2 = document.createElement('a');
  dropDownLink2.innerHTML = 'Ipsum';
  dropDownLink2.href = '#';
  dropDown.appendChild(dropDownLink2);
  const dropDownLink3 = document.createElement('a');
  dropDownLink3.innerHTML = 'Dolor';
  dropDownLink3.href = '#';
  dropDown.appendChild(dropDownLink3);
  const dropDownLink4 = document.createElement('a');
  dropDownLink4.innerHTML = 'Sit';
  dropDownLink4.href = '#';
  dropDown.appendChild(dropDownLink4);
  const dropDownLink5 = document.createElement('a');
  dropDownLink5.innerHTML = 'Amet';
  dropDownLink5.href = '#';
  dropDown.appendChild(dropDownLink5);

  const slideFrame = document.createElement('div');
  slideFrame.id = 'slideFrame';
  content.appendChild(slideFrame);

  const slideContent = document.createElement('div');
  slideContent.id = 'slideContent';
  slideFrame.appendChild(slideContent);

  const prevBtn = document.createElement('a');
  prevBtn.innerHTML = '&#10094;';
  prevBtn.href = '#';
  prevBtn.id = 'prevBtn';
  const nextBtn = document.createElement('a');
  nextBtn.innerHTML = '&#10095;';
  nextBtn.href = '#';
  nextBtn.id = 'nextBtn';
  slideFrame.appendChild(prevBtn);
  slideFrame.appendChild(nextBtn);

  const img1 = document.createElement('img');
  img1.classList.add('slideImage');

  img1.id = 'firstImg';
  img1.style.zIndex = 0;
  img1.src = forest;
  slideContent.appendChild(img1);

  const img2 = document.createElement('img');
  img2.classList.add('slideImage');
  img2.id = 'secondImg';
  img2.style.zIndex = 0;
  img2.src = mountain;
  slideContent.appendChild(img2);

  const img3 = document.createElement('img');
  img3.classList.add('slideImage');
  img3.classList.add('active');
  img3.id = 'thirdImg';
  img3.style.zIndex = 1;
  img3.src = rice;
  slideContent.appendChild(img3);

  const dotContainer = document.createElement('div');
  dotContainer.id = 'dotContainer';
  slideFrame.appendChild(dotContainer);

  const slides = document.getElementsByClassName('slideImage');
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('a');
    dot.classList.add('dot');
    dot.id = `${i}`;
    dotContainer.appendChild(dot);
  }
  document.getElementById('2').classList.add('selected');

  initListeners('Content');
};

export default init;
