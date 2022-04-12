const certificates = document.querySelectorAll(".certification .group");
const images = document.querySelectorAll(".certification .group img");
const years = document.querySelectorAll(".certification .group p:nth-child(2)");
const organizations = document.querySelectorAll(
  ".certification .group p:nth-child(3)"
);
const title = document.querySelectorAll(".certification .group p:nth-child(4)");

const fullImage = document.querySelector(".certification .fullimage");
const exit = document.querySelector(".certification .fullimage .info img");
const previous = document.querySelector(
  ".certification .fullimage .icon:first-of-type"
);
const next = document.querySelector(
  ".certification .fullimage .icon:last-of-type"
);
const fImg = document.querySelector(".certification .fullimage img.full");
const fDescriptions = document.querySelectorAll(
  ".certification .fullimage .info p"
);

fullImage.style.display = "none";

for (let i = 0; i < certificates.length; i++) {
  certificates[i].addEventListener("click", function () {
    let pos = i;
    document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    fullImage.style.display = "";
    fImg.src = images[i].src;
    fDescriptions[0].innerHTML = years[i].innerHTML;
    fDescriptions[1].innerHTML = organizations[i].innerHTML;
    fDescriptions[2].innerHTML = title[i].innerHTML;

    previous.addEventListener("click", function () {
      if (pos !== 0) {
        fImg.src = images[pos - 1].src;
        fDescriptions[0].innerHTML = years[pos - 1].innerHTML;
        fDescriptions[1].innerHTML = organizations[pos - 1].innerHTML;
        fDescriptions[2].innerHTML = title[pos - 1].innerHTML;
      }
      pos = pos - 1;
    });

    next.addEventListener("click", function () {
      if (pos !== 6) {
        fImg.src = images[pos + 1].src;
        fDescriptions[0].innerHTML = years[pos + 1].innerHTML;
        fDescriptions[1].innerHTML = organizations[pos + 1].innerHTML;
        fDescriptions[2].innerHTML = title[pos + 1].innerHTML;
      }
      pos = pos + 1;
    });

    exit.addEventListener("click", function () {
      fullImage.style.display = "none";
      document.getElementsByTagName("BODY")[0].style.overflow = "";
    });
  });
}
