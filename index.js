window.onload = function () {
  let d = document;
  let q = "querySelector";
  let iframe = d[q]("iframe");
  const area = document.querySelectorAll("textarea");
  const saveBtn = document.querySelector(".js-run-btn");
  const minimizeBtn = document.querySelector(".js-minimize");
  const codeSections = document.querySelector(".js-section-container");
  const toggleIcon = document.querySelector(".js-toggle-icon");


  minimizeBtn.addEventListener("click", () => {
   if (codeSections.classList.contains("hidden")) {
     codeSections.classList.remove("hidden");
     toggleIcon.classList.add("fa-minus");
     toggleIcon.classList.remove("fa-plus");
     window.screenY(0);
   } else {
     codeSections.classList.add("hidden");
     toggleIcon.classList.remove("fa-minus");
     toggleIcon.classList.add("fa-plus");
   }
  });

  for (var i = area.length - 1; i >= 0; i--) {
    if (area[i].addEventListener) {
      saveBtn.addEventListener(
        "click",
        function () {
          iframe.srcdoc =
            area[0].value +
            "<style>" +
            area[1].value +
            "</style>" +
            "<script>" +
            area[2].value +
            "</script>";
        },
        false
      );
    } else if (area[i].attachEvent) {
      saveBtn.attachEvent("click", function () {
        // IE-specific event handling code
        iframe.srcdoc =
          area[0].value +
          "<style>" +
          area[1].value +
          "</style>" +
          "<script>" +
          area[2].value +
          "</script>";
      });
    }
  }
};
