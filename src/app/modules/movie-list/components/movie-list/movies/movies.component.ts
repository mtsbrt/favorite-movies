import { Component, OnInit, Input, OnChanges, ɵConsole } from "@angular/core";
import { Movie } from 'src/app/modules/core/models/movie';
import { Router } from '@angular/router';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnChanges {

    @Input() movies: Movie[] = [];

    public rows = [];

    constructor(private _router: Router) {

    }

    public ngOnInit() {
        this.turnMoviesIntoRows(this.movies);
    }
    
    public ngOnChanges() {
        this.turnMoviesIntoRows(this.movies);
    }

    public turnMoviesIntoRows(movies: Array<Object>) {
        if (movies.length > 0) {
            console.log('hi');
            const rows = [];
            let rowOfMovies = [];
            while (movies.length > 0) {
                rowOfMovies.push(movies.shift());
                if (rowOfMovies.length === 6 || movies.length === 0) {
                    rows.push(rowOfMovies);
                    rowOfMovies = [];
                    console.log(rows);
                }
                console.log(rowOfMovies);
            }
            this.rows = rows;
        }
    }

    public movieIsFavorite(movie: Movie) {
        const favoriteMovies: Array<Movie> = [].concat(JSON.parse(localStorage.getItem('favoriteMovies'))).filter(x => x !== null);
        if (favoriteMovies.length > 0) {
            return favoriteMovies.find(register => register.imdbID === movie.imdbID) ?  true : false;
        }
        return false;
    }

    public goToMovie(movie: Movie) {
        this._router.navigateByUrl(`/movie/${movie.imdbID}`);
    }
}