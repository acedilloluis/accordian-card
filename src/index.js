const faqTitles = document.querySelectorAll('.faq-title');
const faqBodies = document.querySelectorAll('.faq-body');
const downArrows = document.querySelectorAll('.down-arrow');
const womanMobile = document.querySelector('#woman-mobile');
const shadowMobile = document.querySelector('#shadow-mobile');
let titlesOpened = 0;

function updateFAQ(index, titleClass, bodyClass, arrowClass, change) {
  faqTitles[index].setAttribute('class', titleClass);
  faqBodies[index].setAttribute('class', bodyClass);
  downArrows[index].setAttribute('class', arrowClass);
  titlesOpened += change;
}

function updateMobileImages(image, baseBotPosition) {
  image.style.setProperty(
    '--bottom-position',
    `${baseBotPosition + titlesOpened * 4}%`
  );
}

function updateComponent(
  index,
  titleClass,
  bodyClass,
  arrowClass,
  titleChange
) {
  updateFAQ(index, titleClass, bodyClass, arrowClass, titleChange);
  updateMobileImages(womanMobile, womanBaseBot);
  updateMobileImages(shadowMobile, shadowBaseBot);
}

function getBaseBottomPosition(image) {
  const imageStyles = getComputedStyle(image);
  return Number(imageStyles.getPropertyValue('--bottom-position').slice(0, 2));
}

const womanBaseBot = getBaseBottomPosition(womanMobile);
const shadowBaseBot = getBaseBottomPosition(shadowMobile);

for (let i = 0; i < 4; i++) {
  faqTitles[i].addEventListener('click', () => {
    if (faqTitles[i].className === 'faq-title-active') {
      updateComponent(i, 'faq-title', 'faq-body', 'down-arrow', -1);
    } else {
      updateComponent(i, 'faq-title-active', 'faq-body-active', 'up-arrow', 1);
    }
  });
}
