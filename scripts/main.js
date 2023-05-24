const heading = document.querySelector('.heading');

let iOSBackgroundFix = () => {
  const iphone = navigator.userAgent.match(/iPhone/i)

  if (iphone) {
    heading.style.backgroundAttachment = 'initial';
  }
}

iOSBackgroundFix();