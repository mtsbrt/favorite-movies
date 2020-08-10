import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/modules/core/services/movies.service';
import { ThrowStmt } from '@angular/compiler';
import { DetailedMovie } from 'src/app/modules/core/models/detailed-movie';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movie } from 'src/app/modules/core/models/movie';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

    public movie: DetailedMovie;
    
    constructor(
        private route: ActivatedRoute,
        private moviesService: MoviesService,
        private router: Router,
        private _snackBar: MatSnackBar
        ) {

    }

    public ngOnInit() {
        this.route.params.subscribe(params => {
            this.moviesService.get(params.id).subscribe(res => {
                if (res.Response === "False") {
                    this._snackBar.open(`Sorry, something went wrong while we were searching for the movie. Please try again.`, '', {
                        duration: 5000,
                        panelClass: 'error'
                    });
                    this.router.navigateByUrl('/movies');
                }
                this.movie = res;
            });
        }, err => {
            this._snackBar.open(`Sorry, something went wrong while we were searching for the movie. Please try again.`, '', {
                duration: 5000,
                panelClass: 'error'
            });
            this.router.navigateByUrl('/movies');
        });
    }

    public movieIsFavorite(movie: DetailedMovie) {
        const favoriteMovies: Array<Movie> = [].concat(JSON.parse(localStorage.getItem('favoriteMovies'))).filter(x => x !== null);
        if (favoriteMovies.length > 0) {
            return favoriteMovies.find(register => register.imdbID === movie.imdbID) ?  true : false;
        }
        return false;
    }

    public favoriteMovie(movie: DetailedMovie) {
        const favoriteMovies: Array<Movie> = [].concat(JSON.parse(localStorage.getItem('favoriteMovies'))).filter(x => x !== null);
        favoriteMovies.push({
            Title: movie.Title,
            Year: movie.Year,
            imdbID: movie.imdbID,
            Type: movie.Type,
            Poster: movie.Poster
        });
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    }

    public undoFavorite(movie: DetailedMovie) {
        const favoriteMovies: Array<Movie> = [].concat(JSON.parse(localStorage.getItem('favoriteMovies')));
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies.filter(register => register.imdbID !== movie.imdbID)));
    }

    public returnToList() {
        this.router.navigateByUrl('/movies');
    }
}