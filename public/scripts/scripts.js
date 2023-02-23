window.addEventListener('scroll',()=>{
    


    if(window.scrollY > 600) {
        document.querySelector('nav').classList.add('fixed-top');
        document.querySelector('nav').classList.add('animate__slideInDown');
        document.querySelector('nav').classList.add('navbar-shadow');

        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
    } 

    else{
        
        document.querySelector('nav').classList.remove('animate__slideInDown');
        document.querySelector('nav').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
        document.querySelector('nav').classList.remove('navbar-shadow');
    } 
    
})



document.addEventListener('DOMContentLoaded',()=>{
    let preloader = document.querySelector("#preloader");


    setTimeout(()=>{
        preloader.classList.remove('d-flex');
       
        preloader.classList.add('d-none');

    }, 1000)
})