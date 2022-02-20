export function searchToggleSuggestion() {
    console.log('searchToggleSuggestion');
  document
    .querySelector(".search-panel input")
    .addEventListener("keyup", function (e) {
      var is_suggestion_active = document
        .querySelector(".search-suggestion")
        .classList.contains("active");
      if (e.keyCode === 13) {
        //enter key
        // this.search();
      }

      if (is_suggestion_active) {
        //suggestion is active
      } else {
        //show suggestion
        document.querySelector(".search-suggestion").classList.add("active");
      }
    });

  //mounse over input search
  document
    .querySelector(".search-panel input")
    .addEventListener("change", function () {
      document.querySelector(".search-suggestion").classList.remove("active");
    });
}


export const initContextMenu = () => {

  let hideContextMenu = (e) => {
    if (e.target.classList.contains('context')) {
      return false;
    }
    document.querySelector('.context-menu').style.left = '-9999px';
    document.querySelector('.context-menu').style.top = '-9999px';

    return true;
  }

  document.querySelectorAll('main .context').forEach(el => {
      el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if(!hideContextMenu(e)) {
        return;
      }
      // console.log("Coordinate(X) = " + e.clientX + "<br>Coordinate(Y) = " + e.clientY);
      document.querySelector('.context-menu').style.left = (e.clientX - 60) + 'px';
      document.querySelector('.context-menu').style.top = (e.clientY - 40) + 'px';
    })
  });


  document.documentElement.addEventListener('click', hideContextMenu)
}