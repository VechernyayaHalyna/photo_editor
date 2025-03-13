document.addEventListener("DOMContentLoaded", () => {
    const imageUrl = localStorage.getItem("uploadedImage");
    const template = document.getElementById("photo");
    const editorContent = document.getElementById("editor-content");

    if (imageUrl && template) {
        const clonedTemplate = template.content.cloneNode(true);
        const imgElement = clonedTemplate.querySelector("#uploaded-photo");
        if (imageUrl) {
            imgElement.src = imageUrl;
        }


        editorContent.appendChild(clonedTemplate);
    } else {
        console.error("Ошибка загрузки изображения или шаблона");
    }

    let sliders = document.querySelectorAll('.control');
let filters = {
        blur: "0px", 
        brightness: "100%",
        contrast: "100%",
        grayscale: "0%",
        "hue-rotate": "0deg",
        invert: "0%",
        opacity: "100%",
        saturate: "100%",
        sepia: "0%"   
};
const img = document.querySelector("#uploaded-photo");
const resetButton = document.querySelector(".reset-btn");
let outputs = document.querySelectorAll('output');

function applyFilters() {
    const filterString = `
            blur(${filters.blur})
            brightness(${filters.brightness}) 
            contrast(${filters.contrast}) 
            grayscale(${filters.grayscale}) 
            hue-rotate(${filters["hue-rotate"]})
            invert(${filters.invert})
            opacity(${filters.opacity})
            saturate(${filters.saturate}) 
            sepia(${filters.sepia}) 
        `;
        img.style.filter = filterString;
}
    
sliders.forEach(slider => {
        slider.addEventListener("input", (event) => {
            const filterName = event.target.dataset.filter;
            let measure = "%";
            if (filterName === "blur") {
                measure = "px";
            } else if (filterName === "hue-rotate") {
                measure = "deg";
            }
            filters[filterName] = event.target.value + measure;
            applyFilters();
            outputs.forEach(output => {
                if (output.dataset.filter === event.target.dataset.filter) {
                    output.innerHTML = event.target.value + measure;
                }
            })
        });
});
    
 resetButton.addEventListener("click", () => {
     filters = {
            blur: "0px", 
            brightness: "100%",
            contrast: "100%",
            grayscale: "0%",
            "hue-rotate": "0deg",
            invert: "0%",
            opacity: "100%",
            saturate: "100%",
            sepia: "0%"  
        };
        applyFilters();
        
        // Сбрасываем значения слайдеров
        sliders.forEach(slider => {
            const filterName = slider.dataset.filter;
            let initialValue = 100;
            if (filterName === "blur" || filterName === "grayscale" || filterName === "hue-rotate" || filterName === "invert" || filterName === "sepia") {
                initialValue = 0;
            }
            slider.value = initialValue;
            let measure = "%";
            if (filterName === "blur") {
                measure = "px";
            } else if (filterName === "hue-rotate") {
                measure = "deg";
            }
            outputs.forEach(output => {
                if (output.dataset.filter === slider.dataset.filter) {
                    output.innerHTML = initialValue + measure;
                }
            })
        });
     
        
    });

    applyFilters(); // Применяем стандартные фильтры при загрузке

});



// let blurInput = document.querySelector('#blur');
// let brightnessInput = document.querySelector('#brightness');
// let contrastInput = document.querySelector('#contrast');
// let shadowSizeInput = document.querySelector('#shadowSize');
// let shadowBlurInput = document.querySelector('#shadowBlur');
// let shadowColorInput = document.querySelector('#shadowColor');
// let grayscaleInput = document.querySelector('#grayscale');
// let hueRotateInput = document.querySelector('#hue-rotate');
// let invertInput = document.querySelector('#invert');
// let opacityInput = document.querySelector('#opacity');
// let saturateInput = document.querySelector('#saturate');
// let sepiaInput = document.querySelector('#sepia');

// let blurOutput = document.querySelector('.blur output');
// let brightnessOutput = document.querySelector('.brightness output');
// let contrastOutput = document.querySelector('.contrast output');
// let grayscaleOutput = document.querySelector('.grayscale output');
// let hueRotateOutput = document.querySelector('.hue-rotate output');
// let invertOutput = document.querySelector('.invert output');
// let opacityOutput = document.querySelector('.opacity output');
// let saturateOutput = document.querySelector('.saturate output');
// let sepiaOutput = document.querySelector('.sepia output');

// blurInput.addEventListener('input', () => {
//     photo.style.filter = `blur(${blurInput.value}px)`;
//     blurOutput.textContent = `${blurInput.value}px`;
// });

// brightnessInput.addEventListener('input', () => {
//     photo.style.filter = `brightness(${brightnessInput.value}%)`;
//     brightnessOutput.textContent = `${brightnessInput.value}%`;
// });

// contrastInput.addEventListener('input', () => {
//     photo.style.filter = `contrast(${contrastInput.value}%)`;
//     contrastOutput.textContent = `${contrastInput.value}%`;
// });

// grayscaleInput.addEventListener('input', () => {
//     photo.style.filter = `grayscale(${grayscaleInput.value}%)`;
//     grayscaleOutput.textContent = `${grayscaleInput.value}%`;
// });

// hueRotateInput.addEventListener('input', () => {
//     photo.style.filter = `hue-rotate(${hueRotateInput.value}deg)`;
//     hueRotateOutput.innerHTML = `${hueRotateInput.value}<sup>o</sup>`;
// });

// invertInput.addEventListener('input', () => {
//     photo.style.filter = `invert(${invertInput.value}%)`;
//     invertOutput.textContent = `${invertInput.value}%`;
// });

// opacityInput.addEventListener('input', () => {
//     photo.style.filter = `opacity(${opacityInput.value}%)`;
//     opacityOutput.textContent = `${opacityInput.value}%`;
// });

// saturateInput.addEventListener('input', () => {
//     photo.style.filter = `saturate(${saturateInput.value}%)`;
//     saturateOutput.textContent = `${saturateInput.value}%`;
// });

// sepiaInput.addEventListener('input', () => {
//     photo.style.filter = `sepia(${sepiaInput.value}%)`;
//     sepiaOutput.textContent = `${sepiaInput.value}%`;
// });

window.addEventListener('beforeunload', () => {
    localStorage.removeItem('uploadedImage');
});