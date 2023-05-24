const menuButton = document.querySelector('.menu-button');
const menuPopup = document.querySelector('.menu-items');

menuButton.addEventListener('click', () => {
  menuPopup.id == 'menu-hide' || menuPopup.id == 'menu' ? menuPopup.id = 'menu-show' : menuPopup.id = 'menu-hide';

  setTimeout( () => {if (menuPopup.id ==  'menu-hide') menuPopup.id = 'menu'}, 151);
});

let setPhoneLink = () => {
  const android = navigator.userAgent.match(/Android/i);
  const iphone = navigator.userAgent.match(/iPhone/i)
  
  const phoneLink = document.querySelector('#phone');
  const emailLink = document.querySelector('#email');

  if (android || iphone) {
    phoneLink.href = 'tel:+1-307-347-4001';
  } else if (location.pathname == "/index.html") {
    phoneLink.href = emailLink.href = 'pages/contact.html';
    phoneLink.classList.add('hover-info');
    emailLink.classList.add('hover-info');
  } else {
    phoneLink.href = emailLink.href = 'contact.html';
    phoneLink.classList.add('hover-info');
    emailLink.classList.add('hover-info');
  }
}

setPhoneLink();