const output = document.getElementById("output");
window.addEventListener("load", () => {
  getData();
});
async function getData() {
  let res = await fetch("https://breakingbadapi.com/api/characters");

  let result = await res.json();

  result.map((result) => {
    const page = `
    <div class = "charImg">
    <img src = "${result.img}"  class = "resultImg">
    </div>
    <div class = "data">
    <h5>${result.name}</h5>
    </div>
    `;
    let results = document.createElement("div");
    results.classList.add(
     
    );
    results.innerHTML = page;
    output.appendChild(results);
  });
}