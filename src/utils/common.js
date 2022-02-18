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
