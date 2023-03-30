const addmoviemodalElement = document.getElementById('add-modal');

const startaddMovieButton = document.querySelector('header button')
const backdropElement = document.getElementById('backdrop');
const cancelAddMovieButton = addmoviemodalElement.querySelector('.btn--passive');
const toggleBackdrop = () =>{
    backdropElement.classList.toggle('visible');
}

const togglemovieModal = () =>{
    addmoviemodalElement.classList.toggle('visible');
   toggleBackdrop();
};
const cancelAddMovie = () => {
    togglemovieModal();
};

const backdropClickHandler = () =>{
    togglemovieModal();
};

startaddMovieButton.addEventListener('click', togglemovieModal);
cancelAddMovieButton.addEventListener('click',cancelAddMovie );