const deleteIcons = document.querySelectorAll(".taskdelete");

for (let i = 0; i < deleteIcons.length; i++) {
  deleteIcons[i].addEventListener("mouseover", function () {
    this.src = "img / list / cross - mark - red.png";
  });
}
