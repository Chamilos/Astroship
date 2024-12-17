// Mobile Menus level_1 - level_2 - level_3
const menulvl = document.querySelectorAll("[data-menu-level]");
const menuId = document.querySelectorAll("[data-menu-id]");
const burgerButton = document.getElementById('collapse');


menuId.forEach((target) => {
    
    target.addEventListener("click", () => {
        const valueMenuLvl = target.getAttribute("data-menu-level");
        const valueMenuId = target.getAttribute("data-menu-id");
        const targetedLvl = document.getElementById(valueMenuLvl);
        const targetedId = document.getElementById(valueMenuId);
        
        if(targetedLvl){
            targetedLvl.classList.toggle("show");
        } else {
           return;
        }

        if (targetedId) {
          targetedId.classList.toggle("show");
        } else {
            return;
        }


        burgerButton.addEventListener("click",()=>{
            if(targetedLvl){
                targetedLvl.classList.remove("show");
            } else {
                console.log("no LvL found");
            }
    
            if (targetedId) {
              targetedId.classList.remove("show");
            } else {
                console.log("no ID found");
            }
        })
    })
})


// Dropdown on level_3 menu

// const drop = document.querySelectorAll("#menu-collapse");