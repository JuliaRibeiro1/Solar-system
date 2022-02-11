
function moveTitle() {
    if(window.scrollY >-1 && window.scrollY < 400){
        document.querySelector('h1').style.cssText ="transform:translateX(15%);transition:ease-in-out 1s"
    }
    else {
        document.querySelector('h1').style.cssText 
        = "transform:translateX(-15%);transition:ease-in-out 1s"
    }

}
function moveText() {
    if(window.scrollY >300 && window.scrollY < 800){
        document.querySelector('.introductionText').style.cssText = "transform:translateX(0%);transition:ease-in-out 1s;"
    }
    else {
        document.querySelector('.introductionText').style.cssText = "transform:translateX(15%);transition:ease-in-out 1s"
    
}

}
window.addEventListener('scroll',moveTitle)
window.addEventListener('scroll',moveText)