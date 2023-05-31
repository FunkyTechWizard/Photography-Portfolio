frameworks.forEach( function(element,index) {
    const card = `<div class="card" data-city="${index}">
      <div class="column ${element.class}">
      <figure class="zoom" onmousemove="zoom(event)" style="background-image: url(${element.image})">
  <img class="card-img-top" src="${element.image}" alt="Card image cap">
  
  </figure>
    
          <h3>${element.name}</h3>
          <p>${element.desc1}
          <span class="dots">...</span>s
          <span class="more" style="display: none;">${element.desc2}</span>
      </p>
          <button  id="${index}" onclick="readMore(this.id)" class="button button3">Read more</button>
        </div>
    </div>`
    const ele = document.createElement('div');
    ele.innerHTML = card;
    document.body.appendChild(ele.firstChild);
  })
  function readMore(index) {
    
  if (typeof(Storage) !== "undefined") {
    // Store
    console.log(frameworks[index]);
    localStorage.setItem(index, JSON.stringify(frameworks[index]));
    }
    window.location.href="readmore.html?id="+index
    // console.log(value);
  
  }
  filterSelection("all")
  function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
  }
  
  function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
  }
  
  function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
  }
  
  
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
  }
  // sidebar 
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  