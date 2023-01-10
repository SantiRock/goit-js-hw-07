import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

for (let item of galleryItems) {
    const div = document.createElement("div");
    div.classList.add("gallery__item");
    gallery.append(div);

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = item.original;
    link.rel = "_self";
    div.append(link);
   
    const image = document.createElement("img");
    image.classList.add("gallery__image")
    image.src = item.preview;
    image.setAttribute("data-source", item.original);
    image.alt = item.description;
    link.append(image);

    const modal = basicLightbox.create(`
            <img src=${item.original}>
        `)

    link.addEventListener("click", (event) => {
        event.preventDefault();
        modal.show();
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            modal.close();
        }
    }); 
};

console.log(gallery);



