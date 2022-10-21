const faqTitles = document.querySelectorAll('.faq-title');
const faqBodies = document.querySelectorAll('.faq-body');
const downArrows = document.querySelectorAll('.down-arrow');

function updateFAQ(index, titleClass, bodyClass, arrowClass) {
  faqTitles[index].setAttribute('class', titleClass);
  faqBodies[index].setAttribute('class', bodyClass);
  downArrows[index].setAttribute('class', arrowClass);
}

for (let i = 0; i < 4; i++) {
  faqTitles[i].addEventListener('click', () => {
    if (faqTitles[i].className === 'faq-title-active') {
      updateFAQ(i, 'faq-title', 'faq-body', 'down-arrow');
    } else {
      updateFAQ(i, 'faq-title-active', 'faq-body-active', 'up-arrow');
    }
  });
}
