
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
    if(window.scrollY >300 && window.scrollY < 1000){
        document.querySelector('.introductionText').style.cssText = "transform:translateX(0%);transition:ease-in-out 1s;"
    }
    else {
        document.querySelector('.introductionText').style.cssText = "transform:translateX(15%);transition:ease-in-out 1s"
    
}
}
var transitionPhrase = "THE EIGHT PLANETS"
var letters = transitionPhrase.split('')
function transitionText() {
    if(window.scrollY > 910 && window.scrollY < 1400) {
        if(letters.length > 0){
            document.querySelector('.transitionText').innerHTML += letters.shift()
        }

}else {
    

}
}


setInterval(transitionText,5000)
window.addEventListener('scroll',transitionText)
window.addEventListener('scroll',moveTitle)
window.addEventListener('scroll',moveText)