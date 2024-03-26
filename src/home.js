function home() {
  const title = document.createElement("div");
  title.textContent = "This restaurant is awesome";
  title.className = "title";

  const description = document.createElement("p");
  description.textContent = "In porttitor, tortor vitae ultricies pharetra, nibh mauris bibendum metus, dignissim volutpat magna metus dignissim tellus. Etiam luctus neque non nulla tincidunt accumsan eget a nulla.";

  const restaurantPhoto = document.createElement("img");
  restaurantPhoto.className = "restaurant-photo";
  restaurantPhoto.src = "https://raw.githubusercontent.com/allan2609/restaurant-page/main/dist/restaurant.JPG";

  document.querySelector("#content").textContent = "";
  document.querySelector("#content").appendChild(title);
  document.querySelector("#content").appendChild(description);
  document.querySelector("#content").appendChild(restaurantPhoto);
}

export default home;
