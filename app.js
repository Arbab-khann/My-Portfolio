// Select all elements with the class "control"
const buttons = document.querySelectorAll(".control");

// Add click event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the "active-btn" class from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove("active-btn");
    });

    // Add the "active-btn" class to the clicked button
    this.classList.add("active-btn");

    document.querySelector(".active").classList.remove("active");
    document.getElementById(button.dataset.id).classList.add("active");
  });
});

// Add a click event listener for a theme button, if needed
const themeButton = document.querySelector(".theme-btn");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
