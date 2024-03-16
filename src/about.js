function about() {
  const title = document.createElement("div");
  title.textContent = "About us";
  title.className = "title";

  const introText = document.createElement("p");
  const history = document.createElement("p");
  const lastPara = document.createElement("p");

  introText.textContent = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  history.textContent = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Etiam ac tempor ligula. Aliquam eu nibh efficitur, ullamcorper ipsum vel, varius neque. Praesent aliquam, massa eget pellentesque pharetra, mi tellus posuere ex, quis cursus quam dui vitae odio. Nullam venenatis enim dui, vel porttitor est dignissim ut. Suspendisse quis cursus libero.";
  lastPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  document.querySelector("#content").textContent = "";
  document.querySelector("#content").appendChild(title);
  document.querySelector("#content").appendChild(introText);
  document.querySelector("#content").appendChild(history);
  document.querySelector("#content").appendChild(lastPara);
}

export default about;
