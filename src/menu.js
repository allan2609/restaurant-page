function menu() {
  const carouselView = document.createElement("div");
  carouselView.className = "carousel-view";

  const leftButton = document.createElement("button");
  leftButton.className = "left-button";
  leftButton.textContent = "<";

  const itemList = document.createElement("div");
  itemList.className = "item-list";

  const rightButton = document.createElement("button");
  rightButton.className = "right-button";
  rightButton.textContent = ">";

  const itemOne = document.createElement("div");
  const imageOne = document.createElement("img");
  imageOne.className = "menu-image";
  imageOne.src = "../src/pizza1.jpg";
  const itemOneName = document.createElement("p");
  itemOneName.textContent = "Pizza Pepperoni 29€";
  itemOne.appendChild(imageOne);
  itemOne.appendChild(itemOneName);

  const itemTwo = document.createElement("div");
  const imageTwo = document.createElement("img");
  imageTwo.className = "menu-image";
  imageTwo.src = "../src/burger1.jpg";
  const itemTwoName = document.createElement("p");
  itemTwoName.textContent = "Cheeseburger 19€";
  itemTwo.appendChild(imageTwo);
  itemTwo.appendChild(itemTwoName);

  const itemThree = document.createElement("div");
  const imageThree = document.createElement("img");
  imageThree.className = "menu-image";
  imageThree.src = "../src/fries1.jpg";
  const itemThreeName = document.createElement("p");
  itemThreeName.textContent = "Crispy Fries 15€";
  itemThree.appendChild(imageThree);
  itemThree.appendChild(itemThreeName);

  const itemFour = document.createElement("div");
  const imageFour = document.createElement("img");
  imageFour.className = "menu-image";
  imageFour.src = "../src/sushi1.jpg";
  const itemFourName = document.createElement("p");
  itemFourName.textContent = "Tempura Sushi 33€";
  itemFour.appendChild(imageFour);
  itemFour.appendChild(itemFourName);

  const itemFive = document.createElement("div");
  const imageFive = document.createElement("img");
  imageFive.className = "menu-image";
  imageFive.src = "../src/icecream1.jpg";
  const itemFiveName = document.createElement("p");
  itemFiveName.textContent = "Ice Cream 11€";
  itemFive.appendChild(imageFive);
  itemFive.appendChild(itemFiveName);

  const itemSix = document.createElement("div");
  const imageSix = document.createElement("img");
  imageSix.className = "menu-image";
  imageSix.src = "../src/coctail1.jpg";
  const itemSixName = document.createElement("p");
  itemSixName.textContent = "Coctail 9€";
  itemSix.appendChild(imageSix);
  itemSix.appendChild(itemSixName);

  const itemWidth = 150;
  const padding = 10;

  leftButton.addEventListener("click", () => {
    itemList.scrollLeft -= itemWidth + padding
  })

  rightButton.addEventListener("click", () => {
    itemList.scrollLeft += itemWidth + padding
  })

  document.querySelector("#content").textContent = "";
  document.querySelector("#content").appendChild(carouselView);
  carouselView.appendChild(leftButton);
  carouselView.appendChild(itemList);
  itemList.appendChild(itemOne);
  itemList.appendChild(itemTwo);
  itemList.appendChild(itemThree);
  itemList.appendChild(itemFour);
  itemList.appendChild(itemFive);
  itemList.appendChild(itemSix);
  carouselView.appendChild(rightButton);
}

export default menu;
