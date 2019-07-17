const main = function() {
  // using querySelectorAll cause they're more modern, they return a Nodelist as opposed to a HTML collection like getElementsByClassName. You cannot call .forEach on a HTML collection BUT can on a Node List. Ugh... DOM unintuitiveness
  const menues = document.querySelectorAll(".more-menu");
  const notificationsBadge = document.getElementById("notifications-badge");
  // let numberActive = $('.glyphicon-bell.active').length;
  // wrong spot, it's being declared too early;
  // we'll add a watch to numberActive to see if it changes, if it does not then we know something is wrong
  document.addEventListener("click", event => {
    if (event.target.matches(".more-btn")) {
      //  debugger;
      //  first step
      //   console.log(menu)
      //   second step
      //   console.log('How many items are being toggled?', menu.length);
      //  adds breakpoint
      // debugger;
      menuUnorderedList = event.target.nextElementSibling;
      if (getComputedStyle(menuUnorderedList).display === "none") {
        menuUnorderedList.style.setProperty("display", "block");
      } else {
        menuUnorderedList.style.setProperty("display", "none");
      }
    }

    if (event.target.matches(".notification")) {
      const bell = event.target;
      if (bell.classList) {
        bell.classList.toggle("active");
      } else {
        // IE explorer
        bellClassNames = bell.className.split(" ");
        if (bellClassNames.indexOf("active") == -1) {
          bell.className += " " + "active";
        }
      }
        console.log("HERE");
      let numberActive = document.querySelectorAll(".glyphicon-bell.active")
        .length;
      // we must add this check to remove the content within the notification badge and thus the notification badge itself when there are no bells currently active
      if (numberActive) {
        notificationsBadge.textContent = numberActive;
      } else {
        notificationsBadge.textContent = "";
      }
    }
  });
};

document.addEventListener("DOMContentLoaded", main);
