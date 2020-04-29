

let lastScrollTop = 0;
const hiddenNav = document.querySelector('.hiddenNav');
const nav = document.querySelector('nav.row').innerHTML;

window.addEventListener("scroll", function(){ 

     if(this.window.innerWidth >= 768){
          
          hiddenNav.innerHTML = nav;
          let st = window.pageYOffset || document.documentElement.scrollTop; 
          if (st > lastScrollTop){
               hiddenNav.style.opacity = '0';
               hiddenNav.style.transition = 'opacity 0.8s'
          } else if ( st < lastScrollTop && scrollY > 324){
               hiddenNav.style.opacity = '1';
               hiddenNav.style.transition = 'opacity 0.8s'
          }
          else{
               hiddenNav.style.opacity = '0';
               hiddenNav.style.transition = 'opacity 0s'
          }
          lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
     }
   

}, false);