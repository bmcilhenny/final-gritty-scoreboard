var main = function() {
  // let numberActive = $('.glyphicon-bell.active').length;
  // wrong spot, it's being declared too early;
  // we'll add a watch to numberActive to see if it changes, if it does not then we know something is wrong
  $('.more-btn').on('click', (event) => {
    let menu = $('.more-menu');
    // adds breakpoint
    $('.more-menu').toggle();
    console.log("HERE")
  });
  
  $('.notification').on('click', (even) => {
    // first step
    $(event.currentTarget).toggleClass('active');
    let numberActive = $('.glyphicon-bell.active').length;
    // we must add this check to remove the content within the notification badge and thus the notification badge itself when there are no bells currently active
    // if (numberActive) {
    //   $('#total-notifications').text(numberActive);

    // } else {
    //   $('#total-notifications').text('');
    // }
  })    
};
  
  $(document).ready(main);
  