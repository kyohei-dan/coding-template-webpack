// ▼footer要素が見えたらheader要素を下まで移動する処理
const showFooterFunction = function () {
  document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', function () {
      const targetElement = document.getElementById('js-footer');
      const header = document.getElementById('js-header');
      if (!targetElement) {
        return false;
      }
      const getElementDistance = targetElement.getBoundingClientRect().top;
      if (window.innerHeight > getElementDistance) {
        header.classList.add('is-header-scroll-active');
      } else {
        header.classList.remove('is-header-scroll-active');
      }
    });
  });
};
showFooterFunction();

export default showFooterFunction;
