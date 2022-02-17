


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
    else {

    }

}


// Nav bar buttons
const listAside = document.querySelector('.list')
const navBar = document.querySelector('aside')
listAside.addEventListener('click',clickList)
function clickList() {
    navBar.style.cssText = "display:flex;"
    listAside.style.cssText = "display:none;"
}

const close = document.querySelector('.close')
close.addEventListener('click',closeList)
function closeList() {
    navBar.style.cssText = "display:none;"
    listAside.style.cssText = "display:flex;"
}
const homeBtn = document.querySelector('.home')
homeBtn.addEventListener('click',homeSection)
function homeSection() {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}
const mercurySection = document.querySelector('.mercury')
mercurySection.addEventListener('click',mercurySectionBtn)
function mercurySectionBtn() {
    window.scrollTo({
        top:1800,
        left:0,
        behavior:"smooth"
    })

}
const venusSection = document.querySelector('.venus')
venusSection.addEventListener('click',venusSectionBtn)
function venusSectionBtn() {
    window.scrollTo({
        top:2100,
        left:0,
        behavior:"smooth"
    })

}

const earthSection = document.querySelector('.earth')
earthSection.addEventListener('click',earthSectionBtn)
function earthSectionBtn() {
    window.scrollTo({
        top:2400,
        left:0,
        behavior:"smooth"
    })
}
const marsSection = document.querySelector('.mars')
marsSection.addEventListener('click',marsSectionBtn)
function marsSectionBtn() {
    window.scrollTo({
        top:2600,
        left:0,
        behavior:"smooth"
    })
}
const jupiterSection = document.querySelector('.jupiter')
jupiterSection.addEventListener('click',jupiterSectionBtn) 
function jupiterSectionBtn() {
    window.scrollTo({
        top:2900,
        left:0,
        behavior:"smooth"
    })

}
const saturnSection = document.querySelector('.saturn')
saturnSection.addEventListener('click',saturnSectionBtn)
function saturnSectionBtn() {
    window.scrollTo({
        top:3200,
        left:0,
        behavior:"smooth"
    })
}
const uranusSection = document.querySelector('.uranus')
uranusSection.addEventListener('click',uranusSectionBtn)
function uranusSectionBtn() {
window.scrollTo({
    top:3400,
    left:0,
    behavior:"smooth"
})

}
const neptuneSection = document.querySelector('.neptune')
neptuneSection.addEventListener('click',neptuneSectionBtn)
function neptuneSectionBtn() {
window.scrollTo({
    top:3400,
    left:0,
    behavior:"smooth"
})
}
}

setInterval(transitionText,5000)
window.addEventListener('scroll',transitionText)
window.addEventListener('scroll',moveTitle)
window.addEventListener('scroll',moveText)

