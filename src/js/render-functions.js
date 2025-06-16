// У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів <-- Жахлива підказка
// import 'simplelightbox/dist/simple-lightbox.min.css'; <-- I HATE this

const gallery = document.querySelector('ul.gallery');
const loader = document.querySelector('span.loader');
// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
export function createGallery(images) {
  clearGallery();
  //
  console.log(gallery);

  gallery.innerHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        preview = webformatURL,
        original = largeImageURL,
        description = tags,
        // : preview,
        // : original,
        // : description,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
      <div style="display:flex; background: white; position:relative;">
      <span style="z-index: 10;">1$likes: ${likes}</span>
      <span style="z-index: 10;">2vievs: ${views}</span>
      <span style="z-index: 10;">3comments: ${comments}</span>
      <span style="z-index: 10;">4downloads: ${downloads}</span>
      </div>
  </li>`
    )
    .join('');
  // gallery.insertAdjacentHTML(
  //   'afterbegin',
  //   images
  //     .map(
  //       ({ preview, original, description }) => `<li class="gallery-item">
  //   <a class="gallery-link" href="${original}">
  //     <img
  //       class="gallery-image"
  //       src="${preview}"
  //       data-source="${original}"
  //       alt="${description}"
  //     />
  //     fuck
  //     <span>1</span>
  //     <span>2</span>
  //     <span>3</span>
  //     <span>4</span>
  //   </a>
  // </li>`
  //     )
  //     .join('')
  // );
  const dick = new SimpleLightbox('.gallery a', {});
  dick.refresh();
}
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
export function clearGallery() {
  gallery.innerHTML = '';
  //
}
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
export function showLoader() {
  gallery.classList.add('.loading');
  loader.classList.add('.loader-show');
}
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
export function hideLoader() {
  gallery.classList.remove('.loading');
  loader.classList.remove('.loader-show');
}
