import $ from 'jquery'

class NavOpacity {

  hideLogo() {
    $('.navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand').css('display', 'none')
    setTimeout(() => {
      $('.navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand').fadeIn()
    }, 4300)
  }
  
  solidBar() {
    $('.navbar').addClass('opaque')
    $('.dropdown-menu').addClass('opaque');
    $('.dropdown-menu>li>a').addClass('dark-text');
    var offset_val = 0
    function navSlide() {
      var scroll_top = $(window).scrollTop();
      if (scroll_top >= offset_val) { // the detection!
        $('.navbar').addClass('opaque');
        $('.dropdown-menu').addClass('opaque');
        $('.dropdown-menu>li>a').addClass('dark-text');
      } else {
        $('.navbar').removeClass('opaque');
        $('.dropdown-menu').removeClass('opaque');
        $('.dropdown-menu>li>a').removeClass('dark-text');
      }
    }
    $(window).scroll(navSlide);
  }

  changingMenuBar() {
    $('.navbar').removeClass('opaque');
    $('.dropdown-menu').removeClass('opaque');
    $('.dropdown-menu>li>a').removeClass('dark-text');
    var offset_val = 120
    function navSlide() {
      var scroll_top = $(window).scrollTop();
      if (scroll_top >= offset_val) { // the detection!
        $('.navbar').addClass('opaque');
        $('.dropdown-menu').addClass('opaque');
        $('.dropdown-menu>li>a').addClass('dark-text')
        
        // $('.navbar-inverse .navbar-brand').addClass('whitefont');
        // $('.navbar-inverse .navbar-nav>li>a').addClass('whitefont');
      } else {
        $('.navbar').removeClass('opaque');
        $('.dropdown-menu').removeClass('opaque');
        $('.dropdown-menu>li>a').removeClass('dark-text');
        
        // $('.navbar-inverse .navbar-brand').removeClass('whitefont');
        // $('.navbar-inverse .navbar-nav>li>a').removeClass('whitefont');
      }
    }
    $(window).scroll(navSlide);
  }

}


export default new NavOpacity()
  