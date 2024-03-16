function menu() {
  const cheeseburger = document.createElement("p");
  cheeseburger.textContent = "Cheeseburger 29€";

  const fries = document.createElement("p");
  fries.textContent = "Fries 22€";

  const pizza = document.createElement("p");
  pizza.textContent = "Pizza 45€";

  document.querySelector("#content").textContent = "";
  document.querySelector("#content").appendChild(cheeseburger);
  document.querySelector("#content").appendChild(fries);
  document.querySelector("#content").appendChild(pizza);
}

export default menu;
