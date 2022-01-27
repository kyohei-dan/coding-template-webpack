// ▼ドロワーメニューの開閉処
const drawerActiveBtn = function () {
  document.addEventListener('DOMContentLoaded', () => {
    const drawerBtn = document.getElementById('js-drawer-button');
    const nav = document.querySelector('.l-header--nav-cnt');
    const body = document.querySelector('.body');
    if (!drawerBtn) {
      return false;
    }

    drawerBtn.addEventListener('click', function () {
      body.classList.toggle('is-drawerActive');
      nav.classList.toggle('is-drawerActive');

      if (drawerBtn.getAttribute('aria-expanded') === 'false') {
        drawerBtn.setAttribute('aria-expanded', true);
      } else {
        drawerBtn.setAttribute('aria-expanded', false);
      }
    });
  });
};
drawerActiveBtn();

export default drawerActiveBtn;
