const foodItems = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];
const dishes = document.getElementsByClassName("dishes")[0];
const search_btn = document.getElementById("search-button");
const input = document.getElementById("search-input");
const all_rec = document.getElementById("all-rec");
const veg_rec = document.getElementById("veg-rec");
const nonVeg_rec = document.getElementById("non-veg-rec");
const rad_1 = document.getElementById("rad-1");
const rad_2 = document.getElementById("rad-2");
const menu = document.getElementById("menu");
const main = document.getElementsByTagName("main")[0];
const navbar = document.getElementById("navbar");
window.onload = renderData();

function renderData(arr = foodItems) {
  dishes.innerHTML = "";
  arr.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("card");
    element.innerHTML = ` <img src=${
      item.imageSrc
    } class="card-img-top" alt="...">
                
        <div class="card-body d-flex flex-column">
            <span class="text-muted">${item.type}</span>
            <div class="d-flex justify-content-between">
               <div><h5 class="card-title fw-bold">${item.name}</h5></div> 
               <div class="d-flex align-items-center">
                <img src="./assets/Star.svg" alt="">
                <span id="rating" class="text-muted">${item.rating}</span>
               </div>

            </div>
            <div class="d-flex justify-content-between">
               <div><h5 class="card-title fw-normal fs-4 text-danger">${
                 item.time
               }</h5></div> 
               <div>
                <img src=${
                  item.isLiked ? "./assets/like.svg" : "./assets/non-like.svg"
                } alt="">
                <img src="./assets/comments.svg" alt="">
               </div>

            </div>
          
         
        </div>`;
    dishes.appendChild(element);
  });
}
search_btn.addEventListener("click", () => {
  const value = input.value.toLowerCase();

  const arr = foodItems.filter((item) => {
    const str = item.name.toLocaleLowerCase();

    return str.includes(value);
  });

  renderData(arr);
});
all_rec.addEventListener("click", () => {
  renderData(foodItems);
});
veg_rec.addEventListener("click", () => {
  const arr = foodItems.filter((item) => {
    return item.type === "veg";
  });

  renderData(arr);
});
nonVeg_rec.addEventListener("click", () => {
  const arr = foodItems.filter((item) => {
    return item.type === "non-veg";
  });

  renderData(arr);
});
rad_1.addEventListener("click", () => {
  rad_1.style.backgroundImage = "url(./assets/checkbox.svg)";
  rad_2.style.backgroundImage = "none";
  const arr = foodItems.filter((item) => {
    return item.rating >= 4;
  });

  renderData(arr);
});
rad_2.addEventListener("click", () => {
  rad_2.style.backgroundImage = "url(./assets/checkbox.svg)";
  rad_1.style.backgroundImage = "none";
  const arr = foodItems.filter((item) => {
    return item.rating < 4;
  });

  renderData(arr);
});
menu.addEventListener("click", () => {
   main.removeChild(navbar);
    
  main.style.filter = "brightness(50%)";

  const element = document.createElement("div");
  element.classList.add("burger-bar");
  element.innerHTML = `<div>
    <img src="./assets/Cookpal 1.png" alt="" class="mb-3">
    <p class="text-success">Home</p>
    <p>Explore</p>
    <p>Help</p>
    <button type="button" class="btn btn-danger" onclick="closeBar()">close<button>
</div>
<div><img src="./assets/Ellipse 2.svg" alt=""></div>`;

  document.body.appendChild(element);
});
function closeBar() {
  const element = document.getElementsByClassName("burger-bar")[0];
  
  document.body.removeChild(element);
  main.style.filter = "brightness(100%)";
  main.prepend(navbar);
}
