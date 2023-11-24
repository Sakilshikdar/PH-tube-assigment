const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((response) => response.json())
    .then((data) => displayData(data));
};

const displayData = (data) => {
  const divContainer = document.getElementById("divContainer");

  divContainer.innerHTML = "";
  data.data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const img = element.authors.map((pic) => {
      return pic.profile_picture;
    });
    card.innerHTML = `
  <div class="card" style="width: 18rem;">
    <img src="${element.thumbnail}" style="width: 312px;
    height: 200px;" alt="...">
  </div>
  <div class="d-flex">
    <img style="width:50px; height:50px;border-radius: 40px; margin-left:20px" src="${img}" class="card-img-top" alt="...">
    <div style="flex:flex-start">
      <h5 class="card-title" style=" margin-left:40px">${element.title}</h5>
      <p class="card-text" style=" margin-left:40px">${
        element.authors[0].profile_name
      }
      ${
        element.authors[0].verified
          ? `
        <span style="margin-left:10px; margin-button:20px">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clip-path="url(#clip0_11_215)">
        <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
        <path d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92669C6.88906 8.52512 6.23749 8.52512 5.83593 8.92669C5.43437 9.32825 5.43437 9.97981 5.83593 10.3814L8.43124 12.9767C8.82187 13.3673 9.45624 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.2595 14.5641 7.60794 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z" fill="#FFFCEE"/>
        </g>
        <defs>
        <clipPath id="clip0_11_215">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        </span>
        </p>`
          : ""
      }
      
      <p style="margin-left:40px">${element.others.views} views</p>
    </div>
  </div>
`;

    divContainer.appendChild(card);
  });
};

const loadMusicData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((response) => response.json())
    .then((data) => displayMusicData(data));
};

const displayMusicData = (data) => {
  const divContainer = document.getElementById("divContainer");
  const musicData = data.data.filter((element) => element.category_id == 1001);

  divContainer.innerHTML = "";
  musicData.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const img = element.authors.map((pic) => {
      return pic.profile_picture;
    });
    card.innerHTML = `
  <div class="card" style="width: 18rem;">
    <img src="${element.thumbnail}" style="width: 312px;
    height: 200px;" alt="...">
  </div>
  <div class="d-flex">
    <img style="width:50px; height:50px;border-radius: 40px; margin-left:20px" src="${img}" class="card-img-top" alt="...">
    <div style="flex:flex-start">
      <h5 class="card-title" style=" margin-left:40px">${element.title}</h5>
      <p class="card-text" style=" margin-left:40px">${
        element.authors[0].profile_name
      }
      ${
        element.authors[0].verified
          ? `
        <span style="margin-left:10px; margin-button:20px">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clip-path="url(#clip0_11_215)">
        <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
        <path d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92669C6.88906 8.52512 6.23749 8.52512 5.83593 8.92669C5.43437 9.32825 5.43437 9.97981 5.83593 10.3814L8.43124 12.9767C8.82187 13.3673 9.45624 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.2595 14.5641 7.60794 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z" fill="#FFFCEE"/>
        </g>
        <defs>
        <clipPath id="clip0_11_215">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        </span>
        </p>`
          : ""
      }
      
      <p style="margin-left:40px">${element.others.views} views</p>
    </div>
  </div>
`;

    divContainer.appendChild(card);
  });
};

const loadComadyData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((response) => response.json())
    .then((data) => displayComadyData(data));
  changeButtonColor(comedyButton);
};

const displayComadyData = (data) => {
  const divContainer = document.getElementById("divContainer");
  const musicData = data.data.filter((element) => element.category_id == 1003);

  divContainer.innerHTML = "";
  musicData.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const img = element.authors.map((pic) => {
      return pic.profile_picture;
    });
    card.innerHTML = `
  <div class="card" style="width: 18rem;">
    <img src="${element.thumbnail}" style="width: 312px;
    height: 200px;" alt="...">
  </div>
  <div class="d-flex">
    <img style="width:50px; height:50px;border-radius: 40px; margin-left:20px" src="${img}" class="card-img-top" alt="...">
    <div style="flex:flex-start">
      <h5 class="card-title" style=" margin-left:40px">${element.title}</h5>
      <p class="card-text" style=" margin-left:40px">${
        element.authors[0].profile_name
      }
      ${
        element.authors[0].verified
          ? `
        <span style="margin-left:10px; margin-button:20px">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clip-path="url(#clip0_11_215)">
        <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
        <path d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92669C6.88906 8.52512 6.23749 8.52512 5.83593 8.92669C5.43437 9.32825 5.43437 9.97981 5.83593 10.3814L8.43124 12.9767C8.82187 13.3673 9.45624 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.2595 14.5641 7.60794 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z" fill="#FFFCEE"/>
        </g>
        <defs>
        <clipPath id="clip0_11_215">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        </span>
        </p>`
          : ""
      }
      
      <p style="margin-left:40px">${element.others.views} views</p>
    </div>
  </div>
`;

    divContainer.appendChild(card);
  });
};
const loadDrawingData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((response) => response.json())
    .then((data) => displayDrawingData(data));
};

const displayDrawingData = (data) => {
  const divContainer = document.getElementById("divContainer");
  const musicData = data.data.filter((element) => element.category_id == 1005);
  if (musicData.length === 0) {
    divContainer.innerHTML = `
      <div class="column justify-content-center align-items-center">
        <div class=" text-center">
          <img src="./resources/icon.png" class="card-img-top" alt="No content" style="width: 150px; height: auto;margin-top:70px">
          <h1>Oops!! Sorry, There is no content here</h1>
        </div>
      </div>`;
  } else {
    divContainer.innerHTML = "";
    musicData.forEach((element) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${element.thumbnail}" class="card-img-top" alt="...">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            `;
      divContainer.appendChild(card);
    });
  }
};

const parseViews = (viewsString) => {
  let views = parseFloat(viewsString);
  if (viewsString.toLowerCase().includes("k")) {
    views *= 1000;
  } else if (viewsString.toLowerCase().includes("m")) {
    views *= 1000000;
  }
  return views;
};

const loadViewsData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((response) => response.json())
    .then((data) => displayViewsData(data));
};

const displayViewsData = (data) => {
  const divContainer = document.getElementById("divContainer");

  if (data.data.length === 0) {
    divContainer.innerHTML = `
        <div class="column justify-content-center align-items-center">
          <div class=" text-center">
            <img src="./resources/icon.png" class="card-img-top" alt="No content" style="width: 150px; height: auto;margin-top:70px">
            <h1>Oops!! Sorry, There is no content here</h1>
          </div>
        </div>`;
  } else {
    // Sorting based on the numeric value of views
    data.data.sort((a, b) => {
      const viewsA = parseViews(a.others.views);
      const viewsB = parseViews(b.others.views);
      return viewsB - viewsA;
    });

    divContainer.innerHTML = "";

    // Iterating through the sorted array
    data.data.forEach((element) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const img = element.authors.map((pic) => {
        return pic.profile_picture;
      });
      card.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${element.thumbnail}" style="width: 312px;
        height: 200px;" alt="...">
      </div>
      <div class="d-flex">
        <img style="width:50px; height:50px;border-radius: 40px; margin-left:20px" src="${img}" class="card-img-top" alt="...">
        <div style="flex:flex-start">
          <h5 class="card-title" style=" margin-left:40px">${element.title}</h5>
          <p class="card-text" style=" margin-left:40px">${
            element.authors[0].profile_name
          }
          ${
            element.authors[0].verified
              ? `
            <span style="margin-left:10px; margin-button:20px">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_11_215)">
            <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
            <path d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92669C6.88906 8.52512 6.23749 8.52512 5.83593 8.92669C5.43437 9.32825 5.43437 9.97981 5.83593 10.3814L8.43124 12.9767C8.82187 13.3673 9.45624 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.2595 14.5641 7.60794 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z" fill="#FFFCEE"/>
            </g>
            <defs>
            <clipPath id="clip0_11_215">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </span>
            </p>`
              : ""
          }
          
          <p style="margin-left:40px">${element.others.views} views</p>
        </div>
      </div>
    `;

      divContainer.appendChild(card);
    });
  }
};

const allButton = document.getElementById("allButton");
const musicButton = document.getElementById("musicButton");
const comedyButton = document.getElementById("comedyButton");
const drawingButton = document.getElementById("drawingButton");

allButton.classList.add("btn-clicked");

const changeButtonColor = (button) => {
  allButton.classList.remove("btn-clicked");
  musicButton.classList.remove("btn-clicked");
  comedyButton.classList.remove("btn-clicked");
  drawingButton.classList.remove("btn-clicked");

  button.classList.add("btn-clicked");
};

allButton.addEventListener("click", () => {
  loadData();
  changeButtonColor(allButton);
});

musicButton.addEventListener("click", () => {
  loadMusicData(musicButton);
  changeButtonColor(musicButton);
});

comedyButton.addEventListener("click", () => {
  loadComedyData();
  changeButtonColor(comedyButton);
});

drawingButton.addEventListener("click", () => {
  loadDrawingData();
  changeButtonColor(drawingButton);
});

function openBlogInNewTab() {
  // Get the content of the blog div that you want to display
  const blogContent = document.getElementById("accordian_container").innerHTML;

  // Create a new tab and write the blog content to it
  const newTab = window.open();
  newTab.document.write(`
  
      <div id="accordian_container" class="w-50 m-auto" style="margin-top:100px">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Discuss the scope of var, let, and const
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <h6>
                  var: The var statement declares variables that are scoped within
                  functions or globally. They can be initialized with a value. var
                  variables have either global or function scope, unlike let and
                  const, which have block scope.
                  <br />
                  <br />
  
                  let: The let statement declares local variables with block
                  scope, restricting their access to the block they are defined
                  in. These variables can be initialized with a value.
                  <br />
                  <br />
                  const: The const statement declares constants that cannot be
                  re-assigned. They are block-scoped similar to variables declared
                  with let. The value assigned to a constant cannot be changed,
                  and redeclaration of a constant is not allowed.
                </h6>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Tell us the use cases of null and undefined
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                undefined: The undefined value is returned when a variable is
                declared but not initialized. It is also returned when a function
                is called without a return value. It is a primitive value.
  
                <br />
                <br />
                null: The null value is assigned to a variable to indicate that
                the variable has no value. It is an object value that indicates a
                non-existent or invalid object. It is a primitive value.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                What do you mean by REST API?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Rest Api: REST stands for Representational State Transfer. Rest
                API defines a set of constraints to be used for creating Web
                services. REST APIs are mainly used when we want to build web
                services, try to allow different systems and applications tryvto
                interact with each other in a standardized way
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
      ></script>
      <script src="./index.js"></script>
    </body>
  </html>
  
  `);
  newTab.document.close();
}

loadData();
