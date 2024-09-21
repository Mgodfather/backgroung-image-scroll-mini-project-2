const img =document.querySelector('.image-container')

let bgSize = 160

window.addEventListener('scroll', (e) => {
    console.clear()
    let opacityValue = (1-window.scrollY/900).toFixed(2)
    let imgSize = (Math.floor(bgSize-window.scrollY/10))
    console.log(imgSize);
    console.log(opacityValue);

    img.style.opacity = +opacityValue
    img.style.backgroundSize = imgSize + '%'
    
})

if (window.innerWidth < 900 && window.innerWidth > 750) {
    bgSize = 200
}else if(window.innerWidth < 750 && window.innerWidth > 575){
    bgSize = 280
}else if(window.innerWidth < 575) {
    bgSize = 350
}

