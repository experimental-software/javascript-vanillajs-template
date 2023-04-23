import foo from "./core/metasyntax.js";

export function greeting() {
  console.log(foo());
}

const element = document.getElementById("btn");
element.addEventListener("click", (event) => greeting());
