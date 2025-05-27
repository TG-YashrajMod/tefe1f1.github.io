let currentPage = 1;
const itemsPerPage = 8;
const totalMovies = 30;

function loadMovies() {
  const movieList = document.querySelector('.movie-list');
  movieList.innerHTML = ""; // Clear current movie list

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalMovies);

  for (let i = startIndex; i < endIndex; i++) {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');

    const movieImage = document.createElement('img');
    movieImage.src = `movie${i + 1}.jpg`;
    movieImage.alt = `Movie ${i + 1}`;

    const movieTitle = document.createElement('h3');
    movieTitle.textContent = `Movie ${i + 1}`;

    const movieQuality = document.createElement('p');
    movieQuality.textContent = `Quality: 720p, 1080p`;

    const downloadButton = document.createElement('a');
    downloadButton.href = `movie${i + 1}-download-link`;
    downloadButton.classList.add('download-btn');
    downloadButton.textContent = 'Download Now';

    movieItem.appendChild(movieImage);
    movieItem.appendChild(movieTitle);
    movieItem.appendChild(movieQuality);
    movieItem.appendChild(downloadButton);

    movieList.appendChild(movieItem);
  }

  document.querySelector('.prev-btn').disabled = currentPage === 1;
  document.querySelector('.next-btn').disabled = currentPage === Math.ceil(totalMovies / itemsPerPage);
}

document.querySelector('.prev-btn').addEventListener('click', () => {
  if (currentPage > 1) currentPage--;
  loadMovies();
});

document.querySelector('.next-btn').addEventListener('click', () => {
  if (currentPage < Math.ceil(totalMovies / itemsPerPage)) currentPage++;
  loadMovies();
});

document.addEventListener('DOMContentLoaded', loadMovies);
