const burgerButton = document.querySelectorAll('#collapse');

burgerButton.forEach((collapse)=>{
    const navbarMenu = document.querySelector("#navbarMenu");
    const burgerIcons = collapse.querySelectorAll(".navbar-toggler-icon");

    collapse.addEventListener("click",(event)=> {
        if (event.target.closest("#collapse")){
        navbarMenu.classList.toggle("show");
        // collapse.classList.toggle("w-12");
        // collapse.classList.toggle("h-8");

        for (let i=0; i<3; i++) {
            burgerIcons[i].classList.toggle("right-0");
            burgerIcons[i].classList.toggle("transition-all");
            burgerIcons[i].classList.toggle("ease-in-out");
            burgerIcons[i].classList.toggle("delay-50");
            burgerIcons[i].classList.toggle("duration-300");
        };

        burgerIcons[0].classList.toggle("rotate-[135deg]");
        burgerIcons[0].classList.toggle("bottom-0");

        burgerIcons[1].classList.toggle("hidden");

        burgerIcons[2].classList.toggle("rotate-[45deg]");
        burgerIcons[2].classList.toggle("bottom-[5.5px]");
    }
        
    });

    // Close menu on anywhere click
    document.addEventListener("click", (except)=> {
        if (navbarMenu.classList.contains("show")) {
            if (except.target.id == "collapse" || except.target.id == "dropli") {
                return;
            } else {
                navbarMenu.classList.remove("show")
                for (let i=0; i<3; i++) {
                    burgerIcons[i].classList.toggle("right-0");
                    burgerIcons[i].classList.toggle("transition-all");
                    burgerIcons[i].classList.toggle("ease-in-out");
                    burgerIcons[i].classList.toggle("delay-50");
                    burgerIcons[i].classList.toggle("duration-300");
                };
            
                burgerIcons[0].classList.toggle("rotate-[135deg]");
                burgerIcons[0].classList.toggle("bottom-0");
            
                burgerIcons[1].classList.toggle("hidden");
            
                burgerIcons[2].classList.toggle("rotate-[45deg]");
                burgerIcons[2].classList.toggle("bottom-[5.5px]");
            }
        }
    })
});






// if (except.target.id !== "collapse" && except.target.id !== "dropdownLi" && navbarMenu.classList.contains("show")) {
//     navbarMenu.classList.remove("show")
//     for (let i=0; i<3; i++) {
//         burgerIcons[i].classList.toggle("right-0");
//         burgerIcons[i].classList.toggle("transition-all");
//         burgerIcons[i].classList.toggle("ease-in-out");
//         burgerIcons[i].classList.toggle("delay-50");
//         burgerIcons[i].classList.toggle("duration-300");
//     };

//     burgerIcons[0].classList.toggle("rotate-[135deg]");
//     burgerIcons[0].classList.toggle("bottom-0");

//     burgerIcons[1].classList.toggle("hidden");

//     burgerIcons[2].classList.toggle("rotate-[45deg]");
//     burgerIcons[2].classList.toggle("bottom-[5.5px]");
//     } else if (except.target.id === "dropdownLi" && navbarMenu.classList.contains("show") ) {
//             except.classList.toggle("show");
//             except.classList.remove("show-enter");            
//     }
// })