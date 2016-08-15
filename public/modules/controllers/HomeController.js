class HomeController {
  constructor(terminatorService){
    this.init(terminatorService);
  }

  init(terminatorService) {
      this.imageSrc = 'http://image.tmdb.org/t/p/w500/';
      terminatorService.getMovieCollection(528).then(response => {
        this.movieCollection = response.data;
        this.getMovieDetails(this.movieCollection.parts[0]);
      });

      this.getMovieDetails = (movie) => {
          terminatorService.getMovieDetails(movie.id).then(response => {
          this.selection = {
              selectedMovie : movie
            };
              this.movieDetails = response.data;
          });

          terminatorService.getMovieCredits(movie.id).then(response => {
              this.movieCredits = response.data;
              this.showFullProfilePic(this.movieCredits.cast[0]);
          });
      };

      this.showFullProfilePic = (cast) => {
         this.select = {
            selectedCast : cast
         };
         this.fullProfilePic = 'http://image.tmdb.org/t/p/w500' + cast.profile_path;
       }
  }
}

HomeController.$inject = ['terminatorService'];

export default HomeController;