const splitLanding = document.querySelector(".split-landing");
const left = document.querySelector(".split-landing .left");
const innerLeft = left.querySelector(".inner")
const outerLeft = left.querySelector(".outer")
const labelLeft = left.querySelector(".label")
const titleLeft = left.querySelector(".outer h2")
const right = document.querySelector(".split-landing .right");
const innerRight = right.querySelector(".inner")
const outerRight = right.querySelector(".outer")
const labelRight = right.querySelector(".label")
const titleRight = right.querySelector(".outer h2")
const backLeft =left.querySelector(".back")
const backRight =right.querySelector(".back")
let fullScreen = false;

left.onmouseenter = ()=>{
    if(!fullScreen && window.innerWidth > 576){
        splitLanding.style["grid-template-columns"] = "75% 25%" 
        left.style.zIndex = 5;
        right.style.zIndex = null;
    }
}
right.onmouseenter = ()=>{
    if(!fullScreen && window.innerWidth > 576){
        splitLanding.style.gridTemplateColumns = "25% 75%" 
        right.style.zIndex = 5;
        left.style.zIndex = null;
    }
}   
left.onclick = ()=>{
    fullScreen = true
    backLeft.style.opacity = 1
    left.style.zIndex = 5
    innerLeft.style.display = "block"
    titleLeft.style.opacity = 0
    labelLeft.style.opacity = 0
    if(window.innerWidth > 576){
        splitLanding.style.gridTemplateColumns = "100% 25%"
        right.style.left = "-25vw"
    }else{
        splitLanding.style.gridTemplateRows = "100% 25%"
        right.style.top = "-25vh"
        outerLeft.style.height = "40%"
    }
}
right.onclick = ()=>{
    fullScreen = true
    backRight.style.opacity = 1
    right.style.zIndex = 5
    innerRight.style.display = "block"
    titleRight.style.opacity = 0
    labelRight.style.opacity = 0
    if(window.innerWidth > 576){
        splitLanding.style.gridTemplateColumns = "25% 100%"
        right.style.left = "-25vw"
        right.style.flexDirection = "row-reverse"
    }else{
        splitLanding.style.gridTemplateRows = "25% 100%"
        right.style.top = "-25vh"
        outerRight.style.height = "40%"
    }
}
const back = e=>{
    e.stopPropagation()
    fullScreen = false;
    backLeft.style.opacity = 0;
    backRight.style.opacity = 0;
    right.style.left = 
    right.style.top = 
    left.style.zIndex = 
    right.style.zIndex = 
    innerLeft.style.display = 
    innerRight.style.display = 
    titleLeft.style.opacity = 
    titleRight.style.opacity = 
    outerRight.style.height =
    outerLeft.style.height =
    labelLeft.style.opacity = 
    labelRight.style.opacity = 
    right.style.flexDirection = null
    if(window.innerWidth > 576){
        splitLanding.style.gridTemplateColumns = "50% 50%"
    }else{
        splitLanding.style.gridTemplateRows = "50% 50%"
    }
}
backLeft.onclick = backRight.onclick = back

let oldWindowWidth;
window.onresize = ()=>{
    if(window.innerWidth > 576 && oldWindowWidth <= 576){
        if(splitLanding.style.gridTemplateRows.split(" ").includes("100%")){
            splitLanding.style.gridTemplateColumns = 
            splitLanding.style.gridTemplateRows
            right.style.top = null
            right.style.left = "-25vw"
            outerRight.style.height =
            outerLeft.style.height = null
        }
        splitLanding.style.gridTemplateRows = null
    }else if(window.innerWidth <= 576 && oldWindowWidth > 576){
        if(splitLanding.style.gridTemplateColumns.split(" ").includes("100%")){
            splitLanding.style.gridTemplateRows =
            splitLanding.style.gridTemplateColumns  
            right.style.left = null
            right.style.top = "-25vh"
            outerRight.style.height =
            outerLeft.style.height = "40%"
        }
        splitLanding.style.gridTemplateColumns = null
    }
    oldWindowWidth = window.innerWidth
}