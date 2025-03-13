let photo = document.querySelector('.photo img');

let blurInput = document.querySelector('#blur');
let brightnessInput = document.querySelector('#brightness');
let contrastInput = document.querySelector('#contrast');
let shadowSizeInput = document.querySelector('#shadowSize');
let shadowBlurInput = document.querySelector('#shadowBlur');
let shadowColorInput = document.querySelector('#shadowColor');
let grayscaleInput = document.querySelector('#grayscale');
let hueRotateInput = document.querySelector('#hue-rotate');
let invertInput = document.querySelector('#invert');
let opacityInput = document.querySelector('#opacity');
let saturateInput = document.querySelector('#saturate');
let sepiaInput = document.querySelector('#sepia');

let blurOutput = document.querySelector('.blur output');
let brightnessOutput = document.querySelector('.brightness output');
let contrastOutput = document.querySelector('.contrast output');
let grayscaleOutput = document.querySelector('.grayscale output');
let hueRotateOutput = document.querySelector('.hue-rotate output');
let invertOutput = document.querySelector('.invert output');
let opacityOutput = document.querySelector('.opacity output');
let saturateOutput = document.querySelector('.saturate output');
let sepiaOutput = document.querySelector('.sepia output');

blurInput.addEventListener('input', () => {
    photo.style.filter = `blur(${blurInput.value}px)`;
    blurOutput.textContent = `${blurInput.value}px`;
});

brightnessInput.addEventListener('input', () => {
    photo.style.filter = `brightness(${brightnessInput.value}%)`;
    brightnessOutput.textContent = `${brightnessInput.value}%`;
});

contrastInput.addEventListener('input', () => {
    photo.style.filter = `contrast(${contrastInput.value}%)`;
    contrastOutput.textContent = `${contrastInput.value}%`;
});

grayscaleInput.addEventListener('input', () => {
    photo.style.filter = `grayscale(${grayscaleInput.value}%)`;
    grayscaleOutput.textContent = `${grayscaleInput.value}%`;
});

hueRotateInput.addEventListener('input', () => {
    photo.style.filter = `hue-rotate(${hueRotateInput.value}deg)`;
    hueRotateOutput.innerHTML = `${hueRotateInput.value}<sup>o</sup>`;
});

invertInput.addEventListener('input', () => {
    photo.style.filter = `invert(${invertInput.value}%)`;
    invertOutput.textContent = `${invertInput.value}%`;
});

opacityInput.addEventListener('input', () => {
    photo.style.filter = `opacity(${opacityInput.value}%)`;
    opacityOutput.textContent = `${opacityInput.value}%`;
});

saturateInput.addEventListener('input', () => {
    photo.style.filter = `saturate(${saturateInput.value}%`;
    saturateOutput.textContent = `${saturateInput.value}%`;
});

sepiaInput.addEventListener('input', () => {
    photo.style.filter = `sepia(${sepiaInput.value}%`;
    sepiaOutput.textContent = `${sepiaInput.value}%`;
});