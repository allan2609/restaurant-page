function home() {
  const title = document.createElement("div");
  title.textContent = "This restaurant is awesome";
  title.className = "title";

  const description = document.createElement("p");
  description.textContent = "In porttitor, tortor vitae ultricies pharetra, nibh mauris bibendum metus, dignissim volutpat magna metus dignissim tellus. Etiam luctus neque non nulla tincidunt accumsan eget a nulla.";

  document.querySelector("#content").textContent = "";
  document.querySelector("#content").appendChild(title);
  document.querySelector("#content").appendChild(description);
}

export default home;
