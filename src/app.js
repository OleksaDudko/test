import template from "./template.hbs";
import colorpicker from "../colorpicker.json";

console.log(template);
console.log(colorpicker);

const divEl = document.querySelector(".js-palette");
divEl.innerHTML = template({ colorpicker });

divEl.addEventListener("click", (event) => {
    const swatch = event.target.closest(".color-swatch");
    if (!swatch) return;
    const color = swatch.dataset.hex;
    document.body.style.backgroundColor = color;
});