var main = function() {
  // let numberActive = $('.glyphicon-bell.active').length;
  // wrong spot, it's being declared too early;
  // we'll add a watch to numberActive to see if it changes, if it does not then we know something is wrong
  $('.more-btn').on('click', (event) => {
    debugger;
    let menu = $('.more-menu');
    // first step
    //  console.log(menu)
    //  second step
    //  console.log('How many items are being toggled?', menu.length);
    // adds breakpoint
    menu.toggle();
  });
  
  $('.notification').on('click', (even) => {
    // first step
    $(event.currentTarget).toggleClass('active');
    console.log("HERE")
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
  