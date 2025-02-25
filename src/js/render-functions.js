import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector(".loader"); 

export function showLoader() {
    loader.classList.remove("hidden");
}

export function hideLoader() {
    loader.classList.add("hidden");
}

export function clearGallery() {
    document.getElementById("gallery").innerHTML = "";
}

export function displayImages(images) {
  const gallery = document.getElementById("gallery");

  images.forEach(image => {
      const listItem = document.createElement("li");
      listItem.classList.add("gallery-item");

      listItem.innerHTML = `
      <a href="${image.largeImageURL}" class="gallery-link">
          <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image" />
      </a>
      <div class="info">
          <p>Likes <span>${image.likes}</span></p>
          <p>Views <span>${image.views}</span></p>
          <p>Comments <span>${image.comments}</span></p>
          <p>Downloads <span>${image.downloads}</span></p>
      </div>
  `;

      gallery.appendChild(listItem);
  });

  const lightbox = new SimpleLightbox(".gallery-link", {
      captionsData: "alt",
  });
  lightbox.refresh(); 
}

export function smoothScroll() {
  const firstCard = document.querySelector(".gallery-item");
  
  if (firstCard) {
      const cardHeight = firstCard.getBoundingClientRect().height;
      window.scrollBy({
          top: cardHeight * 2,
          behavior: "smooth",
      });
  }
}
