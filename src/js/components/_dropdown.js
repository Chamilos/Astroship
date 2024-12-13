const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");

  // Show dropdown on mouse enter
  dropdown.addEventListener("mouseenter", () => {
    dropdownMenu.classList.add("show-enter");
    dropdownMenu.classList.add("show");
  });

  // Hide dropdown on mouse leave
  dropdown.addEventListener("mouseleave", () => {
    dropdownMenu.classList.remove("show-enter");
    dropdownMenu.classList.remove("show");
  });

  // Toggle on Click
  dropdown.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
    dropdownMenu.classList.remove("show-enter");
  });
});
