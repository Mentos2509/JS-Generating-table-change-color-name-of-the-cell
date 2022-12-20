const rowInput = document.querySelector(".row");
const collumnInput = document.querySelector(".collumn");
const button = document.querySelector(".button");
const table = document.querySelector(".mainTable");

const displayTable = () => {
  table.innerHTML = "";
  const rowNumber = rowInput.value;
  const collumnNumber = collumnInput.value;
  for (let i = 0; i < rowNumber; i++) {
    const row = document.createElement("tr");
    for (let y = 0; y < collumnNumber; y++) {
      const cell = document.createElement("td");
      const text2 = document.createTextNode(
        `${"CN:"} ${y + 1} ${"RN:"} ${i + 1}`
      );
      cell.appendChild(text2);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  const targetCells = document.querySelectorAll("td");
  targetCells.forEach((element) =>
    element.addEventListener("click", () => {
      element.style.background === "yellow" ? element.style.background = "transparent" : element.style.background = "yellow"
    })
  );
};
button.addEventListener("click", displayTable);
