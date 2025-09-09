import message from "./core/metasyntax.js";

export function greeting() {
  console.log(message());
}

const element = document.getElementById("btn");
element.addEventListener("click", (event) => greeting());
