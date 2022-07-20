var acc = document.getElementsByClassName("accordion");
var i;

function class_in_list(c, l) {
    for (let i = 0; i < l.length; i++) {
        if (c === l[i]) {
            return true;
        }
    }
    return false;
}

function chevron() {
    let chevrons = document.getElementsByClassName("chevron-div-i");
    for (let i = 0; i < chevrons.length; i++) {
        if (class_in_list("fa-circle-chevron-down", chevrons[i].classList)) {
            chevrons[i].classList.remove("fa-circle-chevron-down");
            chevrons[i].classList.add("fa-circle-chevron-up");
        } else {
            chevrons[i].classList.remove("fa-circle-chevron-up");
            chevrons[i].classList.add("fa-circle-chevron-down");
        }
    }
}

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

    chevron();
  });
}
