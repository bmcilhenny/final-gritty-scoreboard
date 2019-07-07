var main = function() {
  let numberActive = $('.glyphicon-bell.active').length;
  // wrong spot, it's not in the local scope;
  // we'll add a watch to numberActive to see if it changes, if it does not then we know something is wrong
  $('.more-btn').on('click', (event) => {
    $('.more-menu').toggle();
  });
  $('.share').on('click', (event) => {
    $(event.currentTarget).next().toggle();
  });
  
  $('.notification').on('click', (event) => {
    // first step
    const target = event.target;
    console.log(event);
    // second step
    console.log('You clicked on the item, ', target);
    $(event.currentTarget).toggleClass('active');
    // we must add this check to remove the content within the notification badge and thus the notification badge itself when there are no bells currently active
    if (numberActive) {
      $('#total-notifications').text(numberActive);

    } else {
      $('#total-notifications').text('');
    }
  })    
};
  
  $(document).ready(main);
  