function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.columnGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) {
    document.body.classList.add("no-flexbox-gap");
  }
}
checkFlexGap();

const mobileBtn = document.getElementById("mobile-btn");
const mainHeader = document.querySelector(".main-header");
mobileBtn.addEventListener("click", () => {
  mainHeader.classList.toggle("nav-open");
});

const footerYearEl = document.querySelector(".year");
const currYear = new Date().getFullYear();
footerYearEl.textContent = currYear;

const links = document.querySelectorAll("a:link");
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const scrollEl = document.querySelector(href);
      scrollEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav__nav-item")) {
      mainHeader.classList.toggle("nav-open");
    }
  });
});

const heroSectionEl = document.querySelector(".hero-section");
const observer = new IntersectionObserver(
  entries => {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  { root: null, threshold: 0, rootMargin: "-60px" }
);
observer.observe(heroSectionEl);
