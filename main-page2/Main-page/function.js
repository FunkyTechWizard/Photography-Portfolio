
        
        frameworks.forEach( framework => {
          const card = `<div class="card" style="width: 18rem;">
          
          <img class="card-img" src="${framework.image}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${framework.name}</h5>
            <p class="card-text">fixed card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${framework.desc}</li>
          </ul>
          <div class="card-body">
            <a href="post.html" class="card-link">Read more >></a>
          </div>
        </div>`
          const ele = document.createElement('div');
          ele.innerHTML = card;
          document.body.appendChild(ele.firstChild);
        })
      
        // slider
            var slideIndex = 1;
            showSlides(slideIndex);
            
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
            
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
            
            function showSlides(n) {
              var i;
              var slides = document.getElementsByClassName("mySlides");
              var dots = document.getElementsByClassName("dot");
              if (n > slides.length) {slideIndex = 1}    
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";  
              }
              for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
            }