const selectTabs = document.querySelectorAll(".chick3");
console.log(selectTabs);

const pizzaCategories = document.querySelectorAll(".sect");
console.log(pizzaCategories);

for (let category of pizzaCategories) {
  if (category.classList.contains("chicken_pizza")) {
    category.style.display = "flex";
  } else {
    category.style.display = "none";
  }
}

for (let tab of selectTabs) {
  if (tab.textContent.toLowerCase() === "chicken pizza") {
    tab.classList.add("active");
  }
  tab.addEventListener("click", function () {
    console.log(tab.textContent);
    for (let tab of selectTabs) {
      if (tab.classList.contains("active")) {
        tab.classList.remove("active");
      }
    }
    tab.classList.add("active");
    const tabName=tab.textContent.toLowerCase()
    if(tabName==="margherita"){
        for (let category of pizzaCategories) {
  if (category.classList.contains("margherita")) {
    category.style.display = "flex";
  } else {
    category.style.display = "none";
  }
}
    }
    else if(tabName==="pepperoni"){
        for (let category of pizzaCategories) {
  if (category.classList.contains("pepperoni")) {
    category.style.display = "flex";
  } else {
    category.style.display = "none";
  }
}
    }
    else if(tabName==="chicken pizza"){
  for (let category of pizzaCategories) {
  if (category.classList.contains("chicken_pizza")) {
    category.style.display = "flex";
  } else {
    category.style.display = "none";
  }
}
    }
    else if(tabName==="meat lover's pizza"){
       
        for (let category of pizzaCategories) {
  if (category.classList.contains("meat")) {
    category.style.display = "flex";
  } else {
    category.style.display = "none";
  }
}
    }
     else if(tabName==="hawaiian"){
       
        for (let category of pizzaCategories) {
  if (category.classList.contains("hawaiian")) {
    category.style.display = "flex";
  } else {
    category.style.display = "none";
  }
}
    }
  });

}



