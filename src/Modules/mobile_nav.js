const showMobileNav = () => {
  const navigationPopUp = document.createElement('section');
  navigationPopUp.setAttribute('id', 'mobile_nav_pop_up');
  document.body.appendChild(navigationPopUp);
  navigationPopUp.innerHTML = `

            <div class="mobile_nav_pop_up_content_close">
                <button class ="svgbutton" id= "end-pop" ><svg id="close_nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button>
            </div>
            <div class="mobile_nav_pop_up_content_links">
                <a href="#Home" class= "lin">Home</a>
                <a href="#Cases" class = "lin">Cases</a>
                <a href="#about" class = "lin">About</a>
            </div>
    `;
  const links = document.querySelectorAll('.lin');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      document.body.removeChild(navigationPopUp);
    });
  });

  const closeNav = document.getElementById('end-pop');
  closeNav.addEventListener('click', () => {
    document.body.removeChild(navigationPopUp);
  });
};
module.exports = showMobileNav;