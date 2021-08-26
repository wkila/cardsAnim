const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
        console.log(slide.getAttribute('pos'))
        detectPos(slide)
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

function detectPos(slide) {
    (slide.dataset.pos !== undefined) ? slide.style.backgroundPosition = `${slide.dataset.pos}` : false
}

// второй вариант на проверку дата атрибута

// position = {
//     getDataPos(slide) {
//         const data = slide.getAttribute("pos")
//         (this.postions.indexOf(data)) ? data : false
//     },
//     postions: ["top", "center", "bottom"]
// }

// function newDetectPos(slide) {
//     return position.getDataPos(slide)
// }


