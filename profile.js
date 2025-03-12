const image = document.querySelector("img"),
  input = document.querySelector("imput");
input.addEventListener("change", () => {
  image.src = URL.createObjectURL(inpur.files[0]);
});
