const main = function() {
  const notificationsBadge = document.querySelector("#notifications-badge");
  document.addEventListener("click", event => {

    if (event.target.matches(".more-btn")) {
      menuUnorderedList = event.target.nextElementSibling;
      if (getComputedStyle(menuUnorderedList).display === "none") {
        menuUnorderedList.style.setProperty("display", "block");
      } else {
        menuUnorderedList.style.setProperty("display", "none");
      }
    }

    console.log(event);
    if (event.target.matches(".notification")) {
      const bell = event.target;
      if (bell.classList) {
        bell.classList.toggle('active');
        console.log("The bell's classes after being clicked: ", bell.className);
      } else {
        const bellClassNames = bell.className.split(' ');
        if (bellClassNames.indexOf('active') === -1) {
          bell.className += ' active';
        } else {
          bellClassNames.splice(bellClassNames.indexOf('active'), 1);
          bell.className = bellClassNames.join(' ');
        }
      }

      let numberActive = document.querySelectorAll(".glyphicon-bell.active").length;
      if (numberActive) {
        notificationsBadge.textContent = numberActive;
      } else {
        notificationsBadge.textContent = "";
      }
    }
  });
};

document.addEventListener("DOMContentLoaded", main);