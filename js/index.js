let slideIndex = 0;
showSlide(slideIndex);

function nextSlide(n){
  showSlide(slideIndex += n);
}

function showSlide(n){
  let slide1 = document.getElementsByClassName('slide-1');
  let slide2 = document.getElementsByClassName('slide-2');
  let slide3 = document.getElementsByClassName('slide-3');
  let slides = [slide1, slide2, slide3];
  if (n > slides.length-1) slideIndex = 0;
  if (n < 0) slideIndex = slides.length-1;
  for (let i = 0; i < slides.length; i++){
    for (let x =0; x < slides[i].length; x++){
      slides[i][x].style.display = "none"
    }
    //slides[i].style.display = "none";
  }
  for (let x =0; x < slides[slideIndex].length; x++){
    slides[slideIndex][x].style.display = "block";
  }
}