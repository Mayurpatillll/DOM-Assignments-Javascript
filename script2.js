const productarray = document.querySelectorAll(".as-imagegrid-item-title");
const names = [];
productarray.forEach((e) => {
    names.push(e.innerText);
});