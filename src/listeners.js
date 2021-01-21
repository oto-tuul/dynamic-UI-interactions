import { displayImg, displaySelectImg } from './displayImage';

const initListeners = function addAllInitialListeners(id) {
  const addTabListener = function addNavbarTabDropdownListener(id) {
    const contentTab = document.getElementById(`${id}`);
    contentTab.addEventListener('click', (e) => {
      const contentTabChildren = contentTab.children;
      const contentDropdown = contentTabChildren[1];
      if (e.target === contentTab || e.target === contentTabChildren[0]) {
        contentDropdown.classList.toggle('dropdown-hidden');
      }
    });
  };
  addTabListener(id);

  const addHamburgerListener = function addHamburgerMenuListener() {
    const hamburgerBar = document.getElementById('hamburgerBar');
    const navbarList = document.getElementById('navbarList');
    hamburgerBar.addEventListener('click', () => {
      navbarList.classList.toggle('responsive');
    });
  };
  addHamburgerListener();

  const addNextBtnListener = function () {
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.addEventListener('click', () => {
      auto = 0;
      displayImg(1, 'active');
    });
  };
  addNextBtnListener();

  const addPrevBtnListener = function () {
    const prevBtn = document.getElementById('prevBtn');
    prevBtn.addEventListener('click', () => {
      displayImg(-1, 'reverse');
    });
  };
  addPrevBtnListener();

  const addDotListeners = function () {
    const dots = document.getElementsByClassName('dot');
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', (e) => {
        const n = parseInt(e.target.id);
        displaySelectImg(n);
      });
    }
  };
  addDotListeners();
};

export { initListeners };
