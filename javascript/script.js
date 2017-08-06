//Parallax - background imagem header text and header buttons
var old_scroll_pos;
var new_scroll_pos;

$(document).scroll(function() {
  var wScroll = $(document).scrollTop();
  var negative_distance = wScroll * -1;
  var starting_pos = -100;
  $('.header-section').css({
    'background-position': '0 ' + (starting_pos + negative_distance / 10) + 'px'
  });
  if (wScroll < 300) {
    $('#header-heading').css({
      'transform': 'translate(0px, ' + wScroll / 1.15 + 'px)'
    });
    $('.header-button-container').css({
      'transform': 'translate(0px, ' + wScroll / 2 + 'px)'
    });
  }

});
//Scrolling makes one elemnt go left one right to get in one line at the end of container
// if (wScroll < 400) {
//   $('#header-heading').css({
//     'transform': 'translate(' + wScroll / 1.7 + 'px, ' + wScroll / 1.35 + 'px)'
//   });
//   $('.header-button-container').css({
//     'transform': 'translate(' + negative_distance / 2 + 'px, ' + wScroll / 3.3 + 'px)'
//   });
// }
