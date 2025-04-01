const section = document.getElementsByClassName('section')
const sliderImages = document.querySelectorAll('section')
function debounce(func, wait = 0, immediate = true) {
    let timeout;
  
    return function(...args) {
      const context = this;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args); // Run the function on the trailing edge
      };
  
      const callNow = immediate && !timeout;
      clearTimeout(timeout); // Clear the previous timeout
      timeout = setTimeout(later, wait); // Set the timeout for the next call
  
      if (callNow) func.apply(context, args); // Run the function on the leading edge
    };
  }

function checkSlide(e) {
        sliderImages.forEach(sliderImage => {
        //half way through the image
        const SlideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        //bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = SlideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active')
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide))