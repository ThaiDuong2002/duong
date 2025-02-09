const SCROLL_OFFSET = 55;

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  const scrollPosition = element.offsetTop - SCROLL_OFFSET;

  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
};

export { scrollToSection };
