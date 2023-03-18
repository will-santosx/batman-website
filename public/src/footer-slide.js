
const apiKey = '81e21b87c0628a89b900ad9a6fe6df24';
const searchTerm = 'Batman';

fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    const slidesDiv = document.querySelector('.glide__slides');

    movies.forEach(movie => {
      const posterPath = movie.poster_path;
      const titleMovie = movie.title;
      const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

      const imageSlideContainer = document.createElement('li');
      imageSlideContainer.classList.add('glide__slide');

      const posterImage = document.createElement('img');
      posterImage.src = posterUrl;

      //const movieDisplayTitle = document.createElement('h2');
      //movieDisplayTitle.classList.add('text-movie-title')
      //movieDisplayTitle.textContent = titleMovie
    
      //imageSlideContainer.appendChild(movieDisplayTitle);
      imageSlideContainer.appendChild(posterImage);
      slidesDiv.appendChild(imageSlideContainer);
    });
    const glide = new Glide('.glide', {
      type: 'carousel',
      perView: 10,
      autoplay: 1500,
      gap: 20,
      loop: true,
      breakpoints: {
        640: { perView: 3
        },
      }
    }).mount();
});