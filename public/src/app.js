
const menuButton = document.getElementById('nav-hamburger-button');
const menu = document.getElementById('navbar-default');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

/*
  const apiKey = '81e21b87c0628a89b900ad9a6fe6df24';
  const searchTerm = 'Batman';

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      const movies = data.results;

      movies.forEach(movie => {
        const title = movie.title;
        const releaseDate = movie.release_date;
        const posterPath = movie.poster_path;

        console.log(title, releaseDate)
      });
  }); 
*/