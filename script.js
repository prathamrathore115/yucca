const locomotiveScroll = new LocomotiveScroll();

const main = document.querySelector("main");

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  window.addEventListener("scroll", () => {
    const padding = Math.max(150 - window.scrollY, 0);
    main.style.paddingTop = `${padding}px`;
    const translate = Math.max(window.scrollY, 0);
    main.style.transform = `translate(0%, -${translate}px)`;
  });
});
