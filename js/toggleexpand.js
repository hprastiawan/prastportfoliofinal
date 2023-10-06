document.addEventListener("DOMContentLoaded", function () {
  var toggleHeader = document.querySelector(".toggle-header");
  if (toggleHeader) {
    // Memeriksa jika elemen ada sebelum mengakses propertinya
    toggleHeader.addEventListener("click", function () {
      var toggleBody = document.querySelector(".toggle-body");
      if (toggleBody) {
        // Memeriksa jika elemen ada sebelum mengakses propertinya
        toggleBody.style.display =
          toggleBody.style.display === "none" ? "block" : "none";
      }
    });
  }
});
