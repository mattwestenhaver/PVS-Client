import $ from 'jquery'

class NavOpacity {
  
  solidBar() {
    $('.navbar').addClass('opaque')
    var offset_val = 0
    function navSlide() {
      var scroll_top = $(window).scrollTop();
      if (scroll_top >= offset_val) { // the detection!
        $('.navbar').addClass('opaque');
      } else {
        $('.navbar').removeClass('opaque');
      }
    }
    $(window).scroll(navSlide);
  }

  changingMenuBar() {
    $('.navbar').removeClass('opaque');
    var offset_val = 100
    function navSlide() {
      var scroll_top = $(window).scrollTop();
      if (scroll_top >= offset_val) { // the detection!
        $('.navbar').addClass('opaque');
        $('.navbar-inverse .navbar-brand').addClass('whitefont');
        $('.navbar-inverse .navbar-nav>li>a').addClass('whitefont');
      } else {
        $('.navbar').removeClass('opaque');
        $('.navbar-inverse .navbar-brand').removeClass('whitefont');
        $('.navbar-inverse .navbar-nav>li>a').removeClass('whitefont');
      }
    }
    $(window).scroll(navSlide);
  }

}


export default new NavOpacity()
  