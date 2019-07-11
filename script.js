const main = function() {
  // using querySelectorAll cause they're more modern, they return a Nodelist as opposed to a HTML collection like getElementsByClassName. You cannot call .forEach on a HTML collection BUT can on a Node List. Ugh... DOM unintuitiveness
  const menues = document.querySelectorAll('.more-menu');
  // let numberActive = $('.glyphicon-bell.active').length;
  // wrong spot, it's being declared too early;
  // we'll add a watch to numberActive to see if it changes, if it does not then we know something is wrong
  document.addEventListener('click', (event) => {
       if (event.target.matches('.more-btn')) {
         debugger;
         menues.forEach((menu) => {
           if ( getComputedStyle(menu).display === 'none') {
             debugger;
             menu.style.setProperty('display', 'block');
           } else {
            menu.style.setProperty('display', 'none');
           }
         })
       }

       if (event.target.matches('.notification')) {
        event.target.classList.contains('active') ? event.target.classList.remove('active') : event.target.classList.add('active');
        console.log("HERE");
        let numberActive = document.querySelectorAll('.glyphicon-bell.active').length;
        // numNumberActive = numberActive.empty? ;
        // we must add this check to remove the content within the notification badge and thus the notification badge itself when there are no bells currently active
        // if (numberActive) {
        //   $('#total-notifications').text(numberActive);

        // } else {
        //   $('#total-notifications').text('');
        // }
       }
          //  debugger;
          //  first step
          //   console.log(menu)
          //   second step
          //   console.log('How many items are being toggled?', menu.length);
          //  adds breakpoint
          // debugger;
  });

};
  

document.addEventListener("DOMContentLoaded", main);
  