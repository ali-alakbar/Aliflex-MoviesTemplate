// ===================== Start Header =====================

// ==== Start Enabling The Profile List ====
// Call The Hidden List.
let hiddenList = document.querySelector(".profileList");
// Call The Element That Contain The Hidden List And Add A Function To It.
let img_profile = document.querySelector(".img_profile").onclick = function (e){
    hiddenList.classList.toggle('activeShow');
};
// ==== End Enabling The Profile List ====
// ==== Start Enabling The Color Mode ====

// Call The Header 
let header_sideBar = document.querySelectorAll(".col");

// Call The Element That Contain Night / Day Mode Icons And Add a Function To It
let switchMode = document.querySelector(".switchMode").onclick=function(e) {

    header_sideBar.forEach(element => {
        element.classList.toggle("active");
    });
    
};


// ==== End Enabling The Color Mode ====
// ===================== End Header =====================


// =================== Start New Release ===================
// ======= Start Create Slider =======








// ======= End Create Slider =======
// =================== End New Release ===================
