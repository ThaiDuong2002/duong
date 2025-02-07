const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  const scrollPosition = element.offsetTop - 56;

  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
};

export { scrollToSection };
