const navBar = document.querySelectorAll('#scroll-down');
const buttonScroll = document.querySelector('#scroll-down-btn');
const logoBlue = document.querySelectorAll('#logo-blue');
const logoWhite = document.querySelectorAll('#logo-white');



window.addEventListener("scroll", ()=> {

    if (window.scrollY > 0) {

        // Navbar
        navBar.forEach((scroll)=>{
            scroll.classList.add("style-change");
        });

        // Logo Shiw/Hide
        // logoWhite.forEach((path) => {
        //     path.classList.add("hidden")
        // });
        // logoBlue.forEach((path) => {
        //     path.classList.remove("hidden")
        // });


        // Button Change on scroll primary-secondary
        // buttonScroll.classList.remove("btn-secondary");
        // buttonScroll.classList.add("btn-primary");


        // if(window.scrollY === 0) 
    } else if(window.scrollY === 0) {

        
        // Navbar
        navBar.forEach((scroll)=>{
            scroll.classList.remove("style-change");
        });

        // Logo Show/Hide
        // logoWhite.forEach((path) => {
        //     path.classList.remove("hidden")
        // });
        // logoBlue.forEach((path)=>{
        //     path.classList.add("hidden")
        // });

        // Button Change on scroll primary-secondary
        // buttonScroll.classList.remove("btn-primary");
        // buttonScroll.classList.add("btn-secondary");
    };
});








// const logo = document.querySelectorAll('#oceania');


// logo.forEach((path)=>{
//     const logoPath = path.querySelectorAll('#logoPath');
//     logoPath.forEach((e)=>{
//         e.setAttribute("style","fill: url(#color-blue)") 
//     });
// });


// logo.forEach((path)=>{
//     const logoPath = path.querySelectorAll('#logoPath');
//     logoPath.forEach((e)=>{
//         e.setAttribute("style","fill: url(#color-white)") 
//     });
// });

