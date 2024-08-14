/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]')
const tabContent = document.querySelectorAll('[data-content]')
    tabs.forEach(tab=>{
        tab.addEventListener("click" , ()=>{
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents =>{
                tabContents.classList.remove('skills_active')
            })

            target.classList.add('skills_active')

            tabs.forEach(tab =>{
                tab.classList.remove('skills_active')
            })

            tab.classList.add('skills_active')
        })
    })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/*===== Link Active Work =====*/


/*===== Work Popup =====*/
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("details_button")){
        togglePortfolioPopup();
    }
})

function togglePortfolioPopup(){
    document.querySelector(".details_model").classList.toggle("open");
}

document.querySelector(".details_model-close").addEventListener("click", togglePortfolioPopup)


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.details_model')
const modelBtns = document.querySelectorAll('.details_button')
const modalCloses = document.querySelectorAll('details_model-close')

let model = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')

}
modelBtns.forEach((modelBtn, i)=>{
    modelBtn.addEventListener('click', () =>{
        modal(i)
    })
})


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/
