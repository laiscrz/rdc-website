export function initNavbar(){

  class MobileNavbar{

    constructor(
      hamburger,
      mobileMenu,
      mobileLinks
    ){

      this.hamburger =
      document.querySelector(hamburger);

      this.mobileMenu =
      document.querySelector(mobileMenu);

      this.mobileLinks =
      document.querySelectorAll(mobileLinks);

      this.activeClass = 'active';

      this.handleClick =
      this.handleClick.bind(this);

    }


    animateLinks(){

      this.mobileLinks.forEach((link, index) => {

        link.style.animation
        ? link.style.animation = ''
        : link.style.animation =
        `
        navLinkFade .5s ease forwards
        ${index / 7 + 0.2}s
        `;

      });

    }



    handleClick(){

      this.hamburger
      .classList
      .toggle(this.activeClass);

      this.mobileMenu
      .classList
      .toggle(this.activeClass);

      this.animateLinks();

    }

    closeMenu(){

      this.mobileLinks.forEach(link => {

        link.addEventListener('click', () => {

          this.hamburger
          .classList
          .remove(this.activeClass);

          this.mobileMenu
          .classList
          .remove(this.activeClass);

        });

      });

    }


    addClickEvent(){

      this.hamburger
      .addEventListener(
        'click',
        this.handleClick
      );

      this.closeMenu();

    }


    init(){

      if(this.hamburger){

        this.addClickEvent();

      }

      return this;

    }

  }


  const mobileNavbar =
  new MobileNavbar(

    '.hamburger',
    '.mobile-menu',
    '.mobile-menu a'

  );

  mobileNavbar.init();

}