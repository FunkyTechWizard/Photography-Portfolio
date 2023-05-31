const frameworks = [
  {
    name: "Mountains",
    image:"img/js6.jpg",
     id:0    ,
     class:"nature", 
     desc1:"Nature photography is a wide range of photography taken outdoors and devoted to displaying natural elemensta such as landscapes,wildlife,mountains and natural scenes.",
     desc2:"While clicking this we have observed every single angle.We thought this angle is perfect for clicking photo because clouds and ocean looked beautiful in this angle."
  },
  {
    name:"Cars",
    image:"img/js3.jpg",
    id:1    ,
    class:"cars", 
    desc1:"A car ia a wheeled motor vehicle used for transportation.Car is a mechanical device which used for mobility.We can see diversity in car as well.",
    desc2:"We decided to click the photo normally but output was not good at all.then we thought that picture of moving car would be better than normal and the output was splendid."
  },
  {
    name: "Women",
    image:"img/js2.jpg",
    id:2   ,  
    class:"people" ,
    desc1:"Women has a personality that revolves around her goals and improving her situatio.Women have great mindset about their future and responsibility.",
    desc2:"We asked them that which kind of picture you would like to capture.They said we want to have flowers which covers our picture,And the output was marvelous."


  },
  {
    name: "Men",
    image:"img/js1.jpg",
    id:3  ,
    class:"people" ,
    desc1:"Men is a person that never get respect whatever they do.They are always underrated",
    desc2:"We asked him to click picture with cap and told him to see on the other side.so picture is perfect because he has perfect jawline."

  }
  
];

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
  RemoveClass(x[i], "show");
  if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
}
}

function AddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
}
}

function RemoveClass(element, name) {
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
// function zoom(e){
//   var zoomer = e.currentTarget;
//   e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
//   e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
//   x = offsetX/zoomer.offsetWidth*100
//   y = offsetY/zoomer.offsetHeight*100
//   zoomer.style.backgroundPosition = x + '% ' + y + '%';
// }