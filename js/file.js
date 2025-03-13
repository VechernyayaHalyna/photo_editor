// let input = document.querySelector('.photo');

// input.addEventListener('change', (event) => {
//     const file = event.target.files[0];

//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             // Сохраняем изображение в localStorage
//             try {
//                 localStorage.setItem("uploadedImage", e.target.result);
//                 // Проверим, что изображение сохранено
//                 if (localStorage.getItem("uploadedImage")) {
//                     console.log("Изображение сохранено");
//                     // Переход на editor.html
//                     window.location.href = '../page/editor.html';
//                 } else {
//                     console.error("Ошибка сохранения изображения в localStorage");
//                 }
//             } catch (error) {
//                 console.error("Ошибка при сохранении в localStorage", error);
//             }
//         };
//         reader.readAsDataURL(file); // читаем файл как base64
//     } else {
//         console.error("Файл не выбран");
//     }
// });

console.log("JS файл загружен");

let input = document.querySelector('.photo');

input.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                // Создаем canvas для изменения размера
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                // Устанавливаем размер canvas в зависимости от пропорций изображения
                const maxWidth = 600; // Максимальная ширина
                const maxHeight = 400; // Максимальная высота
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > maxWidth) {
                        height = (maxWidth / width) * height;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width = (maxHeight / height) * width;
                        height = maxHeight;
                    }
                }

                canvas.width = width;
                canvas.height = height;

                // Рисуем изображение на canvas с новым размером
                ctx.drawImage(img, 0, 0, width, height);

                // Получаем base64-строку
                const compressedImage = canvas.toDataURL("image/jpeg", 0.8); // 0.8 - качество сжатия (меньше - больше сжатие)

                // Сохраняем сжатое изображение в localStorage
                try {
                    localStorage.setItem("uploadedImage", compressedImage);
                    if (localStorage.getItem("uploadedImage")) {
                        console.log("Изображение сохранено");
                        window.location.href = '../page/editor.html';
                    } else {
                        console.error("Ошибка сохранения изображения в localStorage");
                    }
                } catch (error) {
                    console.error("Ошибка при сохранении в localStorage", error);
                }
            };
        };
        reader.readAsDataURL(file);
    } else {
        console.error("Файл не выбран");
    }
});
