const n = document.querySelectorAll(".numero");

n[0].focus();

n.forEach((numero, idx) => {
  numero.addEventListener("keydown", ({ key }) => {
    if (key >= 0 && key <= 9) (n[idx].value = ""), espacio(idx + 1);
    if (key === "Backspace") espacio(idx - 1);
  });

  function espacio(idx) {
    setTimeout(() => n[idx]?.focus(), 10);
  }
});
