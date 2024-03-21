function slider() {
    const slider = document.querySelector('.slider');
    const silderList = document.querySelector('.slider-wrap');
    const sliderItem = document.querySelectorAll('.slider__item').length;
    const sliderPrevButton = document.querySelector('.btnowl-prev');
    const sliderNextButton = document.querySelector('.btnowl-next');
    const sliderNumber = document.querySelector('.nb-total');
    const sliderCurrent = document.querySelector('.nb-current');
    count = 1;
    window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
      });
    function nextSlider() {
        if(count < sliderItem) {
            silderList.style.left = "-" + count * slider.offsetWidth+ "px";
            count++;
          }
          else if(count = sliderItem) {
            silderList.style.left = "0px";
            count = 1;
          }
          sliderCurrent.innerHTML = count;
    }
    function prevSlider() {
        if(count > 1) {
            count = count - 2;
            silderList.style.left = "-" + count * slider.offsetWidth + "px";
            count++;
          }
        
          else if(count = 1) {
            count = sliderItem - 1;
            silderList.style.left = "-" + count * slider.offsetWidth + "px";
            count++;
          }
          sliderCurrent.innerHTML = count;


    }
    sliderNumber.innerHTML = sliderItem;
    sliderCurrent.innerHTML = count;
    sliderPrevButton.addEventListener('click', prevSlider);
    sliderNextButton.addEventListener('click', nextSlider);
    setInterval(nextSlider, 3000);
}
slider();
function sliderProduct(){
    const slider = document.querySelector('.promo-data');
    const silderList = document.querySelector('.promo-listProduct');
    const sliderItem = document.querySelectorAll('.promo-product-list').length;
    const sliderPrevButton = document.querySelector('.promo-control__prev');
    const sliderNextButton = document.querySelector('.promo-control__next');
    count = 1;
    window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
      });
    function nextSlider() {
        if(count < sliderItem) {
            silderList.style.left = "-" + count * slider.offsetWidth+ "px";
            count++;
          }
          else if(count = sliderItem) {
            silderList.style.left = "0px";
            count = 1;
          }
    }
    function prevSlider() {
        if(count > 1) {
            count = count - 2;
            silderList.style.left = "-" + count * slider.offsetWidth + "px";
            count++;
          }
        
          else if(count = 1) {
            count = sliderItem - 1;
            silderList.style.left = "-" + count * slider.offsetWidth + "px";
            count++;
          }


    }
    sliderPrevButton.addEventListener('click', prevSlider);
    sliderNextButton.addEventListener('click', nextSlider);
}
sliderProduct();

